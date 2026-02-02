// Centralized Schema.org structured data for Delgado Legal P.A.

export const SITE_URL = "https://silly-gaufre-e5b859.netlify.app";

export const businessInfo = {
  name: "Delgado Legal P.A.",
  legalName: "DELGADO LEGAL, P.A.",
  description:
    "Full-service law firm and licensed title agent specializing in real estate closings, estate planning, foreclosure defense, and more.",
  phone: "(786) 762-2389",
  phoneE164: "+17867622389",
  email: "michael@delgadolegalpa.com",
  address: {
    streetAddress: "6500 Cow Pen Rd STE 304",
    addressLocality: "Miami Lakes",
    addressRegion: "FL",
    postalCode: "33014",
    addressCountry: "US",
  },
  geo: {
    latitude: 25.9116153,
    longitude: -80.3360547,
  },
  areaServed: ["Miami-Dade County", "Broward County", "Palm Beach County"],
  openingHours: [
    { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
  ],
  socialProfiles: [
    "https://www.linkedin.com/in/vanessa-delgado-a4b090a/",
    "https://www.linkedin.com/in/michael-delgado-b9728927/",
  ],
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/og-image.png`,
};

export const attorneys = [
  {
    name: "Vanessa Delgado",
    jobTitle: "Attorney / Partner",
    description: "Attorney specializing in Real Estate Litigation, Real Estate Transactions, Landlord/Tenant Disputes, and Estate Planning.",
    image: `${SITE_URL}/images/team/vanessa.webp`,
    alumniOf: "Florida International University College of Law",
    sameAs: ["https://www.linkedin.com/in/vanessa-delgado-a4b090a/"],
  },
  {
    name: "Michael Delgado",
    jobTitle: "Attorney / Partner",
    description: "Attorney specializing in Real Estate Consumer Matters. Rising Star 2022 recognition from Super Lawyers.",
    image: `${SITE_URL}/images/team/michael.webp`,
    alumniOf: "St. Thomas University School of Law",
    sameAs: [
      "https://www.linkedin.com/in/michael-delgado-b9728927/",
      "https://profiles.superlawyers.com/florida/hialeah/lawyer/michael-delgado/fc4bc44e-6b76-4b98-b79a-f6668d618255.html",
    ],
  },
];

export const practiceAreas = [
  {
    name: "Real Estate Closings",
    description: "Residential closings, title search & insurance, contracts review, settlement services, refinancing, and FSBO transactions.",
  },
  {
    name: "Foreclosure Defense",
    description: "Loan modification, litigation, short sale assistance, deed in lieu, loss mitigation, and bankruptcy alternatives.",
  },
  {
    name: "Commercial Transactions",
    description: "Commercial closings, lease negotiations, asset purchases, due diligence, contracts, and title services.",
  },
  {
    name: "Estate Planning",
    description: "Wills, trusts, power of attorney, healthcare directives, probate, asset protection, and estate administration.",
  },
  {
    name: "Uncontested Divorces",
    description: "Divorce filing, settlement agreements, property division, parenting plans, name changes, and final judgments.",
  },
];

export const faqs = [
  {
    question: "What is a real estate closing?",
    answer: "A real estate closing is the final step in a property transaction where ownership is legally transferred from the seller to the buyer. It involves signing documents, transferring funds, and recording the deed.",
  },
  {
    question: "How long does a typical closing take?",
    answer: "A typical real estate closing takes 30-45 days from contract to close, though this can vary based on financing, inspections, and other factors.",
  },
  {
    question: "What documents should I bring to closing?",
    answer: "You should bring a valid government-issued photo ID, proof of homeowner's insurance, certified funds or wire transfer confirmation, and any documents your attorney or lender has requested.",
  },
  {
    question: "Do you offer mobile closings?",
    answer: "Yes, we offer mobile closings throughout South Florida for your convenience. We can meet at your home, office, or another convenient location.",
  },
  {
    question: "How do you work with real estate agents?",
    answer: "We work closely with real estate agents throughout the transaction, providing timely communication, coordinating schedules, and ensuring a smooth closing process for their clients.",
  },
  {
    question: "Can you handle complex transactions?",
    answer: "Yes, we handle complex transactions including commercial properties, multi-unit properties, short sales, and transactions involving trusts or estates.",
  },
  {
    question: "Why do I need a will?",
    answer: "A will ensures your assets are distributed according to your wishes, designates guardians for minor children, and can simplify the probate process for your loved ones.",
  },
  {
    question: "What's the difference between a will and a trust?",
    answer: "A will takes effect after death and goes through probate. A trust can take effect immediately, avoids probate, provides privacy, and offers more control over asset distribution timing.",
  },
  {
    question: "How do I schedule a consultation?",
    answer: "You can schedule a consultation by calling us at (786) 762-2389, emailing michael@delgadolegalpa.com, or filling out the contact form on our website.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve clients throughout South Florida, including Miami-Dade, Broward, and Palm Beach counties. We also offer mobile closings for added convenience.",
  },
  {
    question: "What are your fees?",
    answer: "Our fees vary depending on the type of service and complexity of the matter. We provide custom quotes after understanding your specific needs. Contact us for a consultation.",
  },
];

// Schema generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: businessInfo.name,
    legalName: businessInfo.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: businessInfo.logo,
    },
    image: businessInfo.image,
    description: businessInfo.description,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    sameAs: businessInfo.socialProfiles,
  };
}

export function generateLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE_URL}/#legalservice`,
    name: businessInfo.name,
    url: SITE_URL,
    logo: businessInfo.logo,
    image: businessInfo.image,
    description: businessInfo.description,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    areaServed: businessInfo.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    openingHoursSpecification: businessInfo.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Services",
      itemListElement: practiceAreas.map((area, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: area.name,
          description: area.description,
        },
      })),
    },
  };
}

export function generateAttorneySchemas() {
  return attorneys.map((attorney, index) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/attorneys#${attorney.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: attorney.name,
    jobTitle: attorney.jobTitle,
    description: attorney.description,
    image: attorney.image,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: attorney.alumniOf,
    },
    worksFor: {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#legalservice`,
      name: businessInfo.name,
    },
    sameAs: attorney.sameAs,
  }));
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: businessInfo.name,
    description: businessInfo.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}
