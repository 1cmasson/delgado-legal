import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { createRoutesStub } from "react-router";
import Contact, { action } from "./contact";

// Mock the translation provider
vi.mock("~/providers/TranslationProvider", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        "contact.hero.subtitle": "Contact Us",
        "contact.hero.title": "Get In Touch",
        "contact.hero.description": "We'd love to hear from you",
        "contact.form.title": "Send Us a Message",
        "contact.form.subtitle": "Fill out the form below",
        "contact.form.firstName": "First Name",
        "contact.form.lastName": "Last Name",
        "contact.form.email": "Email",
        "contact.form.phone": "Phone",
        "contact.form.message": "Message",
        "contact.form.required": "*",
        "contact.form.messagePlaceholder": "Your message...",
        "contact.form.submit": "Send Message",
        "contact.form.submitting": "Sending...",
        "contact.form.disclaimer": "Your information is secure.",
        "contact.form.successTitle": "Thank You!",
        "contact.form.successMessage": "Your message has been sent successfully.",
        "contact.info.title": "Contact Information",
        "contact.info.phone": "Phone",
        "contact.info.email": "Email",
        "contact.info.location": "Location",
        "contact.info.locationValue": "Miami Lakes, FL",
        "contact.info.hours": "Hours",
        "contact.info.hoursValue": "Mon-Fri 9am-5pm",
      };
      return translations[key] || key;
    },
    locale: "en",
    isLoading: false,
  }),
}));

// Mock lucide-react icons
vi.mock("lucide-react", () => ({
  Phone: () => <span data-testid="phone-icon">Phone</span>,
  Mail: () => <span data-testid="mail-icon">Mail</span>,
  MapPin: () => <span data-testid="map-icon">Map</span>,
  Clock: () => <span data-testid="clock-icon">Clock</span>,
  CheckCircle: () => <span data-testid="check-icon">Check</span>,
  AlertCircle: () => <span data-testid="alert-icon">Alert</span>,
}));

// Helper to render Contact with React Router context
function renderContact(actionData?: { success: boolean; error?: string }) {
  const Stub = createRoutesStub([
    {
      path: "/contact",
      Component: Contact,
      action: async () => actionData || { success: false },
    },
  ]);

  return render(<Stub initialEntries={["/contact"]} />);
}

describe("Contact Page", () => {
  describe("Form Rendering", () => {
    it("renders all form fields correctly", async () => {
      renderContact();

      // Wait for form to render
      expect(await screen.findByLabelText(/first name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
    });

    it("marks required fields with asterisks", async () => {
      renderContact();

      await screen.findByLabelText(/first name/i);
      
      // Check that required fields have the * indicator
      const labels = screen.getAllByText("*");
      expect(labels.length).toBeGreaterThanOrEqual(4); // firstName, lastName, email, message
    });

    it("renders form with correct name attribute for Netlify", async () => {
      renderContact();

      await screen.findByLabelText(/first name/i);
      
      const form = document.querySelector('form[name="contact"]');
      expect(form).toBeInTheDocument();
      expect(form).toHaveAttribute("data-netlify", "true");
    });

    it("includes hidden form-name input for Netlify", async () => {
      renderContact();

      await screen.findByLabelText(/first name/i);
      
      const hiddenInput = document.querySelector('input[name="form-name"]');
      expect(hiddenInput).toBeInTheDocument();
      expect(hiddenInput).toHaveValue("contact");
    });
  });

  describe("Form Interaction", () => {
    it("allows users to fill in form fields", async () => {
      const user = userEvent.setup();
      renderContact();

      const firstNameInput = await screen.findByLabelText(/first name/i);
      const lastNameInput = screen.getByLabelText(/last name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const phoneInput = screen.getByLabelText(/phone/i);
      const messageInput = screen.getByLabelText(/message/i);

      await user.type(firstNameInput, "John");
      await user.type(lastNameInput, "Doe");
      await user.type(emailInput, "john@example.com");
      await user.type(phoneInput, "(555) 123-4567");
      await user.type(messageInput, "Hello, I have a question.");

      expect(firstNameInput).toHaveValue("John");
      expect(lastNameInput).toHaveValue("Doe");
      expect(emailInput).toHaveValue("john@example.com");
      expect(phoneInput).toHaveValue("(555) 123-4567");
      expect(messageInput).toHaveValue("Hello, I have a question.");
    });

    it("has HTML5 validation on required fields", async () => {
      renderContact();

      const firstNameInput = await screen.findByLabelText(/first name/i);
      const lastNameInput = screen.getByLabelText(/last name/i);
      const emailInput = screen.getByLabelText(/email/i);
      const messageInput = screen.getByLabelText(/message/i);
      const phoneInput = screen.getByLabelText(/phone/i);

      // Required fields
      expect(firstNameInput).toBeRequired();
      expect(lastNameInput).toBeRequired();
      expect(emailInput).toBeRequired();
      expect(messageInput).toBeRequired();
      
      // Optional field
      expect(phoneInput).not.toBeRequired();
    });

    it("has email type validation", async () => {
      renderContact();

      const emailInput = await screen.findByLabelText(/email/i);
      expect(emailInput).toHaveAttribute("type", "email");
    });
  });
});

describe("Contact Form Action", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns error when required fields are missing", async () => {
    const formData = new FormData();
    formData.set("firstName", "John");
    // Missing lastName, email, message

    const request = new Request("http://localhost/contact", {
      method: "POST",
      body: formData,
    });

    const result = await action({ request, params: {}, context: {} });

    expect(result.success).toBe(false);
    expect(result.error).toBe("Please fill in all required fields.");
  });

  it("returns error for invalid email format", async () => {
    const formData = new FormData();
    formData.set("firstName", "John");
    formData.set("lastName", "Doe");
    formData.set("email", "invalid-email");
    formData.set("message", "Hello");

    const request = new Request("http://localhost/contact", {
      method: "POST",
      body: formData,
    });

    const result = await action({ request, params: {}, context: {} });

    expect(result.success).toBe(false);
    expect(result.error).toBe("Please enter a valid email address.");
  });

  it("submits successfully with valid data", async () => {
    // Mock successful fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
    });

    const formData = new FormData();
    formData.set("form-name", "contact");
    formData.set("firstName", "John");
    formData.set("lastName", "Doe");
    formData.set("email", "john@example.com");
    formData.set("message", "Hello, I have a question.");

    const request = new Request("http://localhost/contact", {
      method: "POST",
      body: formData,
    });

    const result = await action({ request, params: {}, context: {} });

    expect(result.success).toBe(true);
    expect(global.fetch).toHaveBeenCalled();
  });

  it("handles fetch failure gracefully", async () => {
    // Mock failed fetch
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    const formData = new FormData();
    formData.set("form-name", "contact");
    formData.set("firstName", "John");
    formData.set("lastName", "Doe");
    formData.set("email", "john@example.com");
    formData.set("message", "Hello");

    const request = new Request("http://localhost/contact", {
      method: "POST",
      body: formData,
    });

    const result = await action({ request, params: {}, context: {} });

    expect(result.success).toBe(false);
    expect(result.error).toBe("Failed to submit form. Please try again.");
  });

  it("handles network errors gracefully", async () => {
    // Mock network error
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const formData = new FormData();
    formData.set("form-name", "contact");
    formData.set("firstName", "John");
    formData.set("lastName", "Doe");
    formData.set("email", "john@example.com");
    formData.set("message", "Hello");

    const request = new Request("http://localhost/contact", {
      method: "POST",
      body: formData,
    });

    const result = await action({ request, params: {}, context: {} });

    expect(result.success).toBe(false);
    expect(result.error).toBe("An error occurred. Please try again later.");
  });
});
