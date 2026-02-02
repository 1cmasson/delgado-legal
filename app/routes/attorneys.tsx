import type { Route } from "./+types/attorneys";
import { Section } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { DecorativeElement, Scales, Column, Lines, GoldRing, ArtDecoCorner, Gavel } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { PageHero } from "~/components/shared/PageHero";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import { useTranslation } from "~/providers/TranslationProvider";
import { Footer } from "~/components/shared/Footer";
import { JsonLd } from "~/components/seo/JsonLd";
import { generateAttorneySchemas, generateBreadcrumbSchema, SITE_URL } from "~/lib/schema";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Attorneys | Delgado Legal P.A." },
    { name: "description", content: "Meet attorneys Michael and Vanessa Delgado - experienced legal professionals specializing in real estate law, estate planning, and more at Delgado Legal P.A." },
  ];
}

const attorneys = {
  vanessa: {
    image: "/images/team/vanessa.webp",
    education: "Florida International University College of Law",
    graduationYear: "2008",
    experience: "16+",
    specializationKeys: ["realEstateLitigation", "realEstateTransactions", "landlordTenant", "estatePlanning"],
    linkedin: "https://www.linkedin.com/in/vanessa-delgado-a4b090a/",
  },
  michael: {
    image: "/images/team/michael.webp",
    education: "St. Thomas University School of Law",
    graduationYear: "2008",
    experience: "16+",
    recognition: "Rising Star 2022",
    recognitionUrl: "https://profiles.superlawyers.com/florida/hialeah/lawyer/michael-delgado/fc4bc44e-6b76-4b98-b79a-f6668d618255.html",
    specializationKeys: ["realEstateConsumer"],
    linkedin: "https://www.linkedin.com/in/michael-delgado-b9728927/",
  },
};

function AttorneyImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto">
      <GoldRing size={288} className="absolute inset-0 w-full h-full" />
      <img
        src={src}
        alt={alt}
        className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover object-top"
      />
    </div>
  );
}

function LinkedInLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-sm text-muted-foreground hover:text-accent transition-colors"
    >
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </a>
  );
}

function SpecializationBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
      {children}
    </span>
  );
}

export default function Attorneys() {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: "Home", url: SITE_URL },
    { name: "Our Attorneys", url: `${SITE_URL}/attorneys` },
  ];

  const attorneySchemas = generateAttorneySchemas();

  return (
    <>
      {attorneySchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero Section */}
      <PageHero
        subtitleKey="attorneys.hero.subtitle"
        titleKey="attorneys.hero.title"
        descriptionKey="attorneys.hero.description"
      />

      {/* Vanessa Delgado Section */}
      <Section id="vanessa">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SlideUpOnScroll>
              <AttorneyImage src={attorneys.vanessa.image} alt={t('attorneys.vanessa.name')} />
            </SlideUpOnScroll>

            <div>
              <SlideUpOnScroll delay={100}>
                <Heading as="h2" size="lg" className="mb-2">
                  {t('attorneys.vanessa.name')}
                </Heading>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={150}>
                <Text className="text-accent font-medium mb-4">{t('attorneys.vanessa.role')}</Text>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={200}>
                <div className="flex flex-wrap gap-2 mb-6">
                  {attorneys.vanessa.specializationKeys.map((key) => (
                    <SpecializationBadge key={key}>{t(`attorneys.vanessa.specializations.${key}`)}</SpecializationBadge>
                  ))}
                </div>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={250}>
                <Text muted className="mb-6">
                  {t('attorneys.vanessa.bio')}
                </Text>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={300}>
                <div className="space-y-2 mb-6">
                  <Text size="sm" className="flex items-center gap-2">
                    <span className="text-accent">{t('attorneys.labels.education')}:</span>
                    {attorneys.vanessa.education} ({attorneys.vanessa.graduationYear})
                  </Text>
                  <Text size="sm" className="flex items-center gap-2">
                    <span className="text-accent">{t('attorneys.labels.experience')}:</span>
                    {attorneys.vanessa.experience} {t('attorneys.labels.years')}
                  </Text>
                </div>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={350}>
                <LinkedInLink href={attorneys.vanessa.linkedin} label={t('attorneys.labels.linkedIn')} />
              </SlideUpOnScroll>
            </div>
          </div>
        </div>
      </Section>

      {/* Michael Delgado Section */}
      <Section background="muted" id="michael">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <SlideUpOnScroll delay={100}>
                <Heading as="h2" size="lg" className="mb-2">
                  {t('attorneys.michael.name')}
                </Heading>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={150}>
                <div className="flex items-center gap-3 mb-4">
                  <Text className="text-accent font-medium">{t('attorneys.michael.role')}</Text>
                  {attorneys.michael.recognition && (
                    <a
                      href={attorneys.michael.recognitionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold bg-accent text-accent-foreground rounded hover:bg-accent/80 transition-colors"
                    >
                      ⭐ {attorneys.michael.recognition}
                    </a>
                  )}
                </div>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={200}>
                <div className="flex flex-wrap gap-2 mb-6">
                  {attorneys.michael.specializationKeys.map((key) => (
                    <SpecializationBadge key={key}>{t(`attorneys.michael.specializations.${key}`)}</SpecializationBadge>
                  ))}
                </div>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={250}>
                <Text muted className="mb-6">
                  {t('attorneys.michael.bio')}
                </Text>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={300}>
                <div className="space-y-2 mb-6">
                  <Text size="sm" className="flex items-center gap-2">
                    <span className="text-accent">{t('attorneys.labels.education')}:</span>
                    {attorneys.michael.education} ({attorneys.michael.graduationYear})
                  </Text>
                  <Text size="sm" className="flex items-center gap-2">
                    <span className="text-accent">{t('attorneys.labels.experience')}:</span>
                    {attorneys.michael.experience} {t('attorneys.labels.years')}
                  </Text>
                </div>
              </SlideUpOnScroll>

              <SlideUpOnScroll delay={350}>
                <LinkedInLink href={attorneys.michael.linkedin} label={t('attorneys.labels.linkedIn')} />
              </SlideUpOnScroll>
            </div>

            <SlideUpOnScroll className="order-1 lg:order-2">
              <AttorneyImage src={attorneys.michael.image} alt={t('attorneys.michael.name')} />
            </SlideUpOnScroll>
          </div>
        </div>
      </Section>

      {/* Together Section */}
      <Section id="together">
        <DecorativeElement
          position="top-right"
          opacity={0.55}
          className="animate-float-slow mt-4 mr-4 md:mt-6 md:mr-6 lg:mt-8 lg:mr-8"
        >
          <Scales size={140} color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement
          position="bottom-left"
          opacity={0.55}
          className="hidden lg:block animate-float-slow mb-4 ml-4 lg:mb-8 lg:ml-8"
        >
          <Gavel size={140} color="var(--brand-gold)" />
        </DecorativeElement>

        <div className="max-w-5xl mx-auto text-center">
          <FadeInOnScroll>
            <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
              {t('attorneys.together.subtitle')}
            </Text>
          </FadeInOnScroll>

          <SlideUpOnScroll delay={100}>
            <Heading as="h2" size="lg" className="mt-2 mb-8">
              {t('attorneys.together.title')}
            </Heading>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={200}>
            <div className="flex justify-center items-center gap-8 md:gap-16 mb-10">
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <GoldRing size={160} className="absolute inset-0 w-full h-full" />
                <img
                  src={attorneys.vanessa.image}
                  alt={t('attorneys.vanessa.name')}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover object-top"
                />
              </div>
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <GoldRing size={160} className="absolute inset-0 w-full h-full" />
                <img
                  src={attorneys.michael.image}
                  alt={t('attorneys.michael.name')}
                  className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover object-top"
                />
              </div>
            </div>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={300}>
            <Text muted className="max-w-2xl mx-auto mb-4">
              {t('attorneys.together.description1')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={400}>
            <Text muted className="max-w-2xl mx-auto mb-10">
              {t('attorneys.together.description2')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={500}>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">{t('attorneys.together.cta')}</Link>
            </Button>
          </SlideUpOnScroll>
        </div>
      </Section>
      <Footer />
    </>
  );
}
