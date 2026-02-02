import type { Route } from "./+types/about";
import { Section } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Column, Document } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { PageHero } from "~/components/shared/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { useTranslation } from "~/providers/TranslationProvider";
import { Footer } from "~/components/shared/Footer";
import { Target, Scale, Trophy, BookOpen, Handshake, Heart, type LucideIcon } from "lucide-react";
import { JsonLd } from "~/components/seo/JsonLd";
import { generateBreadcrumbSchema, SITE_URL } from "~/lib/schema";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Our Firm | Delgado Legal P.A." },
    { name: "description", content: "Learn about DELGADO LEGAL, P.A. - a full-service law firm in Miami Lakes, FL. Meet our attorneys Michael and Vanessa Delgado." },
  ];
}

const valueKeys: { key: string; icon: LucideIcon }[] = [
  { key: "clientCentric", icon: Target },
  { key: "integrity", icon: Scale },
  { key: "excellence", icon: Trophy },
  { key: "expertise", icon: BookOpen },
  { key: "personalized", icon: Handshake },
  { key: "community", icon: Heart },
];

export default function About() {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "About Our Firm", url: `${SITE_URL}/about` },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <PageHero
        subtitleKey="about.hero.subtitle"
        titleKey="about.hero.title"
        descriptionKey="about.hero.description"
      />

      {/* Mission Section */}
      <Section className="overflow-hidden">
        <DecorativeElement position="top-right" opacity={0.4} className="top-[45%] lg:top-0">
          <Document size={160} className="text-accent" animated />
        </DecorativeElement>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideUpOnScroll>
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-[50%] mx-auto">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/team/working-environment-mobile.webp" />
                  <source media="(max-width: 1024px)" srcSet="/images/team/working-environment-tablet.webp" />
                  <img
                    src="/images/team/working-environment-desktop.webp"
                    alt="Attorney consulting with client at Delgado Legal P.A."
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </picture>
              </div>
            </SlideUpOnScroll>
            <div>
              <SlideUpOnScroll>
                <Heading as="h2" size="lg" className="mb-6">
                  {t('about.mission.title')}
                </Heading>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={100}>
                <Text className="mb-4">
                  {t('about.mission.description1')}
                </Text>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={200}>
                <Text muted>
                  {t('about.mission.description2')}
                </Text>
              </SlideUpOnScroll>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="muted" id="values">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInOnScroll>
              <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
                {t('about.values.subtitle')}
              </Text>
            </FadeInOnScroll>
            <SlideUpOnScroll delay={100}>
              <Heading as="h2" size="lg" className="mt-2">
                {t('about.values.title')}
              </Heading>
            </SlideUpOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueKeys.map((value, index) => (
              <SlideUpOnScroll key={value.key} delay={100 + index * 75}>
                <Card className="text-center h-full bg-background hover:shadow-md transition-shadow">
                  <CardHeader>
                    <value.icon className="w-10 h-10 mx-auto mb-2 text-accent" aria-hidden="true" />
                    <CardTitle>{t(`about.values.items.${value.key}.title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Text size="sm" muted>{t(`about.values.items.${value.key}.description`)}</Text>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>
            ))}
          </div>
        </div>
      </Section>

      {/* Meet Our Attorneys CTA Section */}
      <Section background="accent-solid" id="team" size="compact">
        <DecorativeElement position="center-left" opacity={0.25}>
          <Column size={300} color="white" />
        </DecorativeElement>
        <DecorativeElement position="center-right" opacity={0.25}>
          <Column size={300} color="white" />
        </DecorativeElement>
        
        <div className="max-w-3xl mx-auto text-center">
          <FadeInOnScroll>
            <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
              {t('about.team.subtitle')}
            </Text>
          </FadeInOnScroll>
          <SlideUpOnScroll delay={100}>
            <Heading as="h2" size="lg" className="mt-2 mb-4">
              {t('about.team.title')}
            </Heading>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={200}>
            <Text className="max-w-2xl mx-auto mb-8 text-gray-800">
              {t('about.team.description')}
            </Text>
          </SlideUpOnScroll>
          <SlideUpOnScroll delay={300}>
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Link to="/attorneys">{t('about.team.cta')}</Link>
            </Button>
          </SlideUpOnScroll>
        </div>
      </Section>
      <Footer />
    </>
  );
}
