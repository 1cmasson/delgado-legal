import type { Route } from "./+types/faq";
import { Section } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { CTABanner } from "~/components/shared/CTABanner";
import { Heading, Text } from "~/components/shared/Typography";
import { PageHero } from "~/components/shared/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { useTranslation } from "~/providers/TranslationProvider";
import { Footer } from "~/components/shared/Footer";
import { JsonLd } from "~/components/seo/JsonLd";
import { generateFAQSchema, generateBreadcrumbSchema, SITE_URL } from "~/lib/schema";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQ | Delgado Legal P.A. - Real Estate Closing Questions" },
    { name: "description", content: "Frequently asked questions about real estate closings, estate planning, and our legal services at Delgado Legal P.A. in Miami Lakes, FL." },
  ];
}

const faqCategories = [
  {
    key: "realEstate",
    questionKeys: ["whatIsClosing", "howLong", "whatToBring", "mobileClosings"],
  },
  {
    key: "realtors",
    questionKeys: ["howWork", "complexTransactions"],
  },
  {
    key: "estatePlanning",
    questionKeys: ["whyWill", "willVsTrust"],
  },
  {
    key: "general",
    questionKeys: ["schedule", "areas", "fees"],
  },
];

export default function FAQ() {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "FAQ", url: `${SITE_URL}/faq` },
  ];

  return (
    <>
      <JsonLd data={generateFAQSchema()} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <PageHero
        subtitleKey="faq.hero.subtitle"
        titleKey="faq.hero.title"
        descriptionKey="faq.hero.description"
      />

      {/* FAQ Sections */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <SlideUpOnScroll key={category.key} delay={categoryIndex * 100}>
              <div>
                <Heading as="h2" size="sm" className="mb-4 text-accent">
                  {t(`faq.categories.${category.key}.title`)}
                </Heading>
                <Accordion type="single" collapsible className="w-full">
                  {category.questionKeys.map((questionKey, index) => (
                    <AccordionItem key={questionKey} value={`${category.key}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {t(`faq.categories.${category.key}.questions.${questionKey}.question`)}
                      </AccordionTrigger>
                      <AccordionContent>
                        <Text muted>{t(`faq.categories.${category.key}.questions.${questionKey}.answer`)}</Text>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </SlideUpOnScroll>
          ))}
        </div>
      </Section>

      <CTABanner translationKeyPrefix="faq.cta" />
      <Footer />
    </>
  );
}
