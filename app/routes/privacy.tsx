import type { Route } from "./+types/privacy";
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
    { title: "Privacy Policy | Delgado Legal P.A." },
    { name: "description", content: "Privacy Policy for Delgado Legal P.A. Learn how we collect, use, and protect your personal information." },
  ];
}

export default function Privacy() {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Privacy Policy", url: `${SITE_URL}/privacy` },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <PageHero
        subtitleKey="privacy.hero.subtitle"
        titleKey="privacy.hero.title"
        descriptionKey="privacy.hero.description"
      />

      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
          <SlideUpOnScroll>
            <Heading as="h2" size="sm" className="text-accent">
              {t('privacy.sections.collection.title')}
            </Heading>
            <Text className="mb-6">
              {t('privacy.sections.collection.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={100}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('privacy.sections.use.title')}
            </Heading>
            <Text className="mb-6">
              {t('privacy.sections.use.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={200}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('privacy.sections.protection.title')}
            </Heading>
            <Text className="mb-6">
              {t('privacy.sections.protection.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={300}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('privacy.sections.sharing.title')}
            </Heading>
            <Text className="mb-6">
              {t('privacy.sections.sharing.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={400}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('privacy.sections.cookies.title')}
            </Heading>
            <Text className="mb-6">
              {t('privacy.sections.cookies.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={500}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('privacy.sections.rights.title')}
            </Heading>
            <Text className="mb-6">
              {t('privacy.sections.rights.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={600}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('privacy.sections.changes.title')}
            </Heading>
            <Text className="mb-6">
              {t('privacy.sections.changes.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={700}>
            <Heading as="h2" size="sm" className="text-accent mt-8">
              {t('privacy.sections.contact.title')}
            </Heading>
            <Text className="mb-6">
              {t('privacy.sections.contact.content')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={800}>
            <Text muted className="mt-8 text-sm">
              {t('privacy.lastUpdated')}
            </Text>
          </SlideUpOnScroll>
        </div>
      </Section>

      <Footer />
    </>
  );
}
