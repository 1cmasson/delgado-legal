import type { Route } from "./+types/practices";
import { Section } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement } from "~/components/decorations";
import { CTABanner } from "~/components/shared/CTABanner";
import { Heading, Text } from "~/components/shared/Typography";
import { PageHero } from "~/components/shared/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { useTranslation } from "~/providers/TranslationProvider";
import { Footer } from "~/components/shared/Footer";
import { Home as HomeIcon, Shield, Building, ClipboardList, ScrollText, type LucideIcon } from "lucide-react";
import { JsonLd } from "~/components/seo/JsonLd";
import { generateBreadcrumbSchema, practiceAreas, SITE_URL, businessInfo } from "~/lib/schema";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Practice Areas | Delgado Legal P.A. - Real Estate Law Miami" },
    { name: "description", content: "Our practice areas: Real Estate Closings, Foreclosure Defense, Commercial Transactions, Estate Planning, and Uncontested Divorces. Serving South Florida." },
  ];
}

const practiceAreaKeys: { id: string; key: string; icon: LucideIcon; serviceKeys: string[] }[] = [
  {
    id: "real-estate",
    key: "realEstate",
    icon: HomeIcon,
    serviceKeys: ["residential", "titleSearch", "contracts", "settlement", "refinancing", "fsbo"],
  },
  {
    id: "foreclosure",
    key: "foreclosure",
    icon: Shield,
    serviceKeys: ["loanMod", "litigation", "shortSale", "deedInLieu", "lossMitigation", "bankruptcy"],
  },
  {
    id: "commercial",
    key: "commercial",
    icon: Building,
    serviceKeys: ["closings", "lease", "asset", "dueDiligence", "contracts", "title"],
  },
  {
    id: "estate-planning",
    key: "estate",
    icon: ClipboardList,
    serviceKeys: ["wills", "poa", "healthcare", "probate", "assetProtection", "administration"],
  },
  {
    id: "divorce",
    key: "divorce",
    icon: ScrollText,
    serviceKeys: ["filing", "settlement", "property", "parenting", "nameChange", "judgment"],
  },
];

export default function Practices() {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Practice Areas", url: `${SITE_URL}/practices` },
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: practiceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: area.name,
        description: area.description,
        provider: {
          "@type": "LegalService",
          name: businessInfo.name,
        },
      },
    })),
  };

  return (
    <>
      <JsonLd data={servicesSchema} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <PageHero
        subtitleKey="practices.hero.subtitle"
        titleKey="practices.hero.title"
        descriptionKey="practices.hero.description"
      />

      {/* Practice Area Sections */}
      {practiceAreaKeys.map((area, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <Section
            key={area.id}
            id={area.id}
            background={isEven ? "default" : "muted"}
          >
            <div className="max-w-6xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <SlideUpOnScroll>
                    <area.icon className="w-12 h-12 mb-4 text-accent" aria-hidden="true" />
                  </SlideUpOnScroll>
                  <SlideUpOnScroll delay={100}>
                    <Heading as="h2" size="md" className="mb-4">
                      {t(`practices.areas.${area.key}.title`)}
                    </Heading>
                  </SlideUpOnScroll>
                  <SlideUpOnScroll delay={200}>
                    <Text className="mb-6">
                      {t(`practices.areas.${area.key}.description`)}
                    </Text>
                  </SlideUpOnScroll>
                  <SlideUpOnScroll delay={300}>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link to="/contact">{t('practices.scheduleCta')}</Link>
                    </Button>
                  </SlideUpOnScroll>
                </div>
                
                <SlideUpOnScroll delay={150} className={!isEven ? 'lg:col-start-1' : ''}>
                  <Card className="bg-background">
                    <CardHeader>
                      <CardTitle className="text-lg">{t('practices.servicesInclude')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {area.serviceKeys.map((serviceKey) => (
                          <li key={serviceKey} className="flex items-center gap-2">
                            <span className="text-accent" aria-hidden="true">✓</span>
                            <Text size="sm">{t(`practices.areas.${area.key}.services.${serviceKey}`)}</Text>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </SlideUpOnScroll>
              </div>
            </div>
          </Section>
        );
      })}

      <CTABanner translationKeyPrefix="practices.cta" />
      <Footer />
    </>
  );
}
