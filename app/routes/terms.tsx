import type { Route } from "./+types/terms";
import { Section } from "~/components/layout";
import { SlideUpOnScroll } from "~/components/effects";
import { Heading, Text } from "~/components/shared/Typography";
import { PageHero } from "~/components/shared/PageHero";
import { useTranslation } from "~/providers/TranslationProvider";
import { Footer } from "~/components/shared/Footer";
import { JsonLd } from "~/components/seo/JsonLd";
import { generateBreadcrumbSchema, SITE_URL } from "~/lib/schema";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Service | Delgado Legal P.A." },
    { name: "description", content: "Terms of Service for Delgado Legal P.A. website. Please read these terms carefully before using our website." },
  ];
}

export default function Terms() {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Terms of Service", url: `${SITE_URL}/terms` },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <PageHero
        subtitleKey="terms.hero.subtitle"
        titleKey="terms.hero.title"
        descriptionKey="terms.hero.description"
      />

      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <SlideUpOnScroll>
            <Heading as="h2" size="sm" className="text-accent">
              {t('terms.sections.acceptance.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.acceptance.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={100}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('terms.sections.services.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.services.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={200}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('terms.sections.noAttorneyClient.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.noAttorneyClient.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={300}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('terms.sections.intellectualProperty.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.intellectualProperty.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={400}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('terms.sections.userConduct.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.userConduct.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={500}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('terms.sections.disclaimer.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.disclaimer.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={600}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('terms.sections.limitation.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.limitation.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={700}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('terms.sections.governing.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.governing.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={800}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('terms.sections.changes.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.changes.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={900}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('terms.sections.contact.title')}
            </Heading>
            <Text className="mb-6">
              {t('terms.sections.contact.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={1000}>
            <Text muted className="mt-8 text-sm">
              {t('terms.lastUpdated')}
            </Text>
          </SlideUpOnScroll>
        </div>
      </Section>

      <Footer />
    </>
  );
}
