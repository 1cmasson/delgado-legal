import type { Route } from "./+types/contact";
import { Form, useActionData, useNavigation } from "react-router";
import { Section } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { Heading, Text } from "~/components/shared/Typography";
import { PageHero } from "~/components/shared/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useTranslation } from "~/providers/TranslationProvider";
import { Footer } from "~/components/shared/Footer";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, type LucideIcon } from "lucide-react";
import { JsonLd } from "~/components/seo/JsonLd";
import { generateBreadcrumbSchema, SITE_URL, businessInfo } from "~/lib/schema";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us | Delgado Legal P.A. - Miami Lakes, FL" },
    { name: "description", content: "Contact DELGADO LEGAL, P.A. in Miami Lakes, FL. Call (786) 762-2389 or email michael@delgadolegalpa.com for real estate closings and legal services." },
  ];
}

type ActionData = {
  success: boolean;
  error?: string;
};

export async function action({ request }: Route.ActionArgs): Promise<ActionData> {
  const formData = await request.formData();
  
  // Validate required fields
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!firstName || !lastName || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toString())) {
    return { success: false, error: "Please enter a valid email address." };
  }

  try {
    // Submit to Netlify Forms
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });

    if (!response.ok) {
      return { success: false, error: "Failed to submit form. Please try again." };
    }

    return { success: true };
  } catch {
    return { success: false, error: "An error occurred. Please try again later." };
  }
}

const contactInfo: {
  titleKey: string;
  value?: string;
  valueKey?: string;
  href: string | null;
  icon: LucideIcon;
}[] = [
  {
    titleKey: "contact.info.phone",
    value: "(786) 762-2389",
    href: "tel:+17867622389",
    icon: Phone,
  },
  {
    titleKey: "contact.info.email",
    value: "michael@delgadolegalpa.com",
    href: "mailto:michael@delgadolegalpa.com",
    icon: Mail,
  },
  {
    titleKey: "contact.info.location",
    valueKey: "contact.info.locationValue",
    href: "https://maps.app.goo.gl/aEVBbRF9mQwFji8x6",
    icon: MapPin,
  },
  {
    titleKey: "contact.info.hours",
    valueKey: "contact.info.hoursValue",
    href: null,
    icon: Clock,
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Contact Us", url: `${SITE_URL}/contact` },
  ];

  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "LegalService",
      name: businessInfo.name,
      telephone: businessInfo.phone,
      email: businessInfo.email,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: businessInfo.phone,
        email: businessInfo.email,
        contactType: "customer service",
        areaServed: businessInfo.areaServed,
        availableLanguage: ["English", "Spanish"],
      },
    },
  };

  return (
    <>
      <JsonLd data={contactPointSchema} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <PageHero
        subtitleKey="contact.hero.subtitle"
        titleKey="contact.hero.title"
        descriptionKey="contact.hero.description"
      />

      {/* Contact Form Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SlideUpOnScroll>
              <Card>
                <CardHeader>
                  <CardTitle>{t('contact.form.title')}</CardTitle>
                  <Text size="sm" muted>
                    {t('contact.form.subtitle')}
                  </Text>
                </CardHeader>
                <CardContent>
                  {actionData?.success ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                      <CheckCircle className="w-16 h-16 text-green-500" aria-hidden="true" />
                      <Heading as="h3" size="sm">{t('contact.form.successTitle') || 'Thank You!'}</Heading>
                      <Text muted>
                        {t('contact.form.successMessage') || 'Your message has been sent successfully. We will get back to you soon.'}
                      </Text>
                    </div>
                  ) : (
                    <Form method="post" className="space-y-4" name="contact" data-netlify="true">
                      <input type="hidden" name="form-name" value="contact" />
                      
                      {actionData?.error && (
                        <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 rounded-md" role="alert">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                          <span>{actionData.error}</span>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            {t('contact.form.firstName')} <span className="text-destructive">{t('contact.form.required')}</span>
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                            aria-required="true"
                            disabled={isSubmitting}
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            {t('contact.form.lastName')} <span className="text-destructive">{t('contact.form.required')}</span>
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                            aria-required="true"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          {t('contact.form.email')} <span className="text-destructive">{t('contact.form.required')}</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          aria-required="true"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          {t('contact.form.phone')}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          {t('contact.form.message')} <span className="text-destructive">{t('contact.form.required')}</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder={t('contact.form.messagePlaceholder')}
                          rows={5}
                          required
                          aria-required="true"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (t('contact.form.submitting') || 'Sending...') : t('contact.form.submit')}
                      </Button>
                      
                      <Text size="xs" muted className="text-center">
                        {t('contact.form.disclaimer')}
                      </Text>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </SlideUpOnScroll>

            {/* Contact Information */}
            <div className="space-y-6">
              <SlideUpOnScroll delay={100}>
                <Heading as="h2" size="sm" className="mb-4">
                  {t('contact.info.title')}
                </Heading>
              </SlideUpOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <SlideUpOnScroll key={info.titleKey} delay={150 + index * 75}>
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardContent className="pt-6">
                        <info.icon className="w-6 h-6 mb-2 text-accent" aria-hidden="true" />
                        <Text as="span" className="font-semibold block mb-1">
                          {t(info.titleKey)}
                        </Text>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-sm text-muted-foreground hover:text-accent transition-colors whitespace-pre-line"
                          >
                            {info.valueKey ? t(info.valueKey) : info.value}
                          </a>
                        ) : (
                          <Text size="sm" muted className="whitespace-pre-line">
                            {info.valueKey ? t(info.valueKey) : info.value}
                          </Text>
                        )}
                      </CardContent>
                    </Card>
                  </SlideUpOnScroll>
                ))}
              </div>

              {/* Google Map */}
              <SlideUpOnScroll delay={500}>
                <Card id="location" className="border-0 shadow-none overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video rounded-md overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28709.749853822606!2d-80.33605466636524!3d25.911615294474753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a58d49b6e8bd%3A0x293b774b275cf1a9!2sDelgado%20Legal%20P.A.!5e0!3m2!1sen!2sus!4v1770048205584!5m2!1sen!2sus"
                        className="w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Delgado Legal P.A. location on Google Maps"
                      />
                    </div>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
