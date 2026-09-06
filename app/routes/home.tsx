import { useState, useEffect } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Section } from "~/components/layout";
import { SlideUpOnScroll, FadeInOnScroll } from "~/components/effects";
import { SnowParticles } from "~/components/effects/SnowParticles";
import { HeartsParticles } from "~/components/effects/HeartsParticles";
import { FireworksParticles } from "~/components/effects/FireworksParticles";
import { ConfettiParticles } from "~/components/effects/ConfettiParticles";
import { HolidayGreetingModal } from "~/components/holiday/HolidayGreetingModal";
import { DecorativeElement, Lines, Gavel, Orb, SheenRule } from "~/components/decorations";
import { useParallax } from "~/hooks/useParallax";
import { CTABanner } from "~/components/shared/CTABanner";
import { Heading, Text } from "~/components/shared/Typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useTheme } from "~/providers/ThemeProvider";
import { useTranslation } from "~/providers/TranslationProvider";
import { Footer } from "~/components/shared/Footer";
import { Home as HomeIcon, Shield, Building, ClipboardList, type LucideIcon } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Delgado Legal P.A. | Real Estate Attorney Miami Lakes, FL" },
    { name: "description", content: "DELGADO LEGAL, P.A. is a full-service law firm and licensed title agent in Miami Lakes, FL. Real estate closings, estate planning, foreclosure defense, and more." },
  ];
}

const practiceAreaKeys: { key: string; icon: LucideIcon }[] = [
  { key: "realEstate", icon: HomeIcon },
  { key: "foreclosure", icon: Shield },
  { key: "commercial", icon: Building },
  { key: "estate", icon: ClipboardList },
];

const testimonials = [
  {
    quote: "Thank you for being the BEST partner any realtor can ask for. You are amazing! Your professionalism and hard work is like no other.",
    author: "Estrella P.",
    roleKey: "testimonials.roles.realtor",
    image: "/images/testimonials/delgado-customer-1.webp",
  },
  {
    quote: "First time I see an attorney bend over backwards for everyone involved in the transaction. I will keep in mind the way you work!",
    author: "Amada C.",
    roleKey: "testimonials.roles.realtor",
    image: "/images/testimonials/delgado-customer-3.webp",
  },
  {
    quote: "Thank you for making this a quick and painless process. You guys did a great job!",
    author: "Carlos R.",
    roleKey: "testimonials.roles.buyer",
    image: "/images/testimonials/delgado-customer-2.webp",
  },
];

export default function Home() {
  const { effect, holiday } = useTheme();
  const { t } = useTranslation();
  const [showEffects, setShowEffects] = useState(!!effect);
  const parallaxRef = useParallax(0.4);

  useEffect(() => {
    if (!effect) {
      setShowEffects(false);
      return;
    }
    setShowEffects(true);
    const timer = setTimeout(() => setShowEffects(false), 15000);
    return () => clearTimeout(timer);
  }, [effect]);

  return (
    <>
      {showEffects && effect === 'snow' && <SnowParticles />}
      {showEffects && effect === 'hearts' && <HeartsParticles />}
      {showEffects && effect === 'fireworks' && <FireworksParticles />}
      {showEffects && effect === 'confetti' && <ConfettiParticles />}
      <HolidayGreetingModal holiday={holiday} />
      {/* Hero Section */}
      <section className="min-h-[900px] md:min-h-0 md:py-24 flex items-center justify-center relative overflow-hidden bg-[image:var(--grad-hero)]">
        {/* Blurred photo bleed behind the containerized hero image */}
        <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/images/backgrounds/hero/hero-desktop.webp"
            alt=""
            className="w-full h-full object-cover object-[50%_35%] scale-[1.14] blur-[46px] saturate-[0.55] brightness-[0.52]"
          />
          <div className="absolute inset-0 bg-linear-[180deg,rgba(10,27,46,0.35)_0%,rgba(18,40,63,0.55)_55%,#1B3A5F_100%]" />
        </div>

        {/* Background Image - Containerized */}
        <div className="absolute inset-0 flex justify-center z-0">
          <div className="relative w-full max-w-[1536px] h-full overflow-hidden max-sm:[mask-image:linear-gradient(180deg,#000_0%,#000_50%,rgba(0,0,0,0.82)_62%,rgba(0,0,0,0.32)_82%,transparent_100%)]">
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/backgrounds/hero/hero-mobile.webp" />
              <source media="(max-width: 1024px)" srcSet="/images/backgrounds/hero/hero-tablet.webp" />
              <img
                src="/images/backgrounds/hero/hero-desktop.webp"
                alt=""
                className="w-full h-full object-cover object-[50%_35%]"
              />
            </picture>
            <div className="absolute inset-0 bg-linear-[180deg,rgba(10,27,46,0.28)_0%,rgba(10,27,46,0.34)_55%,rgba(10,27,46,0.44)_100%] sm:block hidden" />
            <div className="absolute inset-0 sm:hidden bg-linear-[180deg,rgba(10,27,46,0)_0%,rgba(18,40,63,0.42)_62%,rgba(22,50,79,0.82)_82%,#1B3A5F_100%]" />
          </div>
        </div>

        <SheenRule />
        <Orb className="-top-[190px] -right-[130px] h-[560px] w-[560px]" strength={0.24} />
        <Orb className="-bottom-[240px] -left-[170px] h-[480px] w-[480px]" strength={0.13} reverse />

        {/* Vignette that lifts the copy off the photo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[48%] z-[1] h-[min(760px,120%)] w-[min(1100px,150%)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_50%_50%,rgba(10,27,46,0.62)_0%,rgba(10,27,46,0.42)_45%,rgba(10,27,46,0)_72%)]"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <SlideUpOnScroll>
            <Text as="span" size="sm" className="text-silver font-semibold uppercase tracking-widest mb-4 block [text-shadow:0_2px_14px_rgba(10,27,46,0.65)]">
              {t('home.hero.subtitle')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6 text-white [text-shadow:0_3px_22px_rgba(10,27,46,0.7)]">
              {t('home.hero.title')}
            </Heading>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={200}>
            <Text size="lg" className="max-w-2xl mx-auto mb-10 text-white [text-shadow:0_2px_18px_rgba(10,27,46,0.75)]">
              {t('home.hero.description')}
            </Text>
          </SlideUpOnScroll>

          <SlideUpOnScroll delay={300}>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">{t('home.hero.ctaPrimary')}</Link>
              </Button>
              <Button asChild variant="silver" size="lg">
                <Link to="/practices">{t('home.hero.ctaSecondary')}</Link>
              </Button>
            </div>
          </SlideUpOnScroll>
        </div>
      </section>

      {/* Practice Areas Section */}
      <Section
        background="navy-gradient"
        id="practices"
        overlay={
          <>
            <Orb className="-top-[160px] -left-[140px] h-[520px] w-[520px]" strength={0.16} />
            <Orb className="-bottom-[200px] -right-[150px] h-[600px] w-[600px]" strength={0.13} reverse />
            <DecorativeElement position="top-right" opacity={0.4} className="animate-float">
              <Gavel size={200} color="var(--brand-silver)" />
            </DecorativeElement>
          </>
        }
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInOnScroll>
              <Text as="span" size="sm" className="text-silver font-semibold uppercase tracking-wider">
                {t('home.practices.subtitle')}
              </Text>
            </FadeInOnScroll>
            <SlideUpOnScroll delay={100}>
              <Heading as="h2" size="lg" className="mt-2 mb-4 text-white">
                {t('home.practices.title')}
              </Heading>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={200}>
              <Text className="max-w-2xl mx-auto text-white/[0.88]">
                {t('home.practices.description')}
              </Text>
            </SlideUpOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreaKeys.map((area, index) => (
              <SlideUpOnScroll key={area.key} delay={100 + index * 100}>
                <Card className="group h-full bg-background hover:-translate-y-1.5 hover:border-edge hover:shadow-[var(--shadow-card-hover)]">
                  <CardHeader>
                    <area.icon className="w-10 h-10 mb-2 text-steel" aria-hidden="true" />
                    <CardTitle className="group-hover:text-steel transition-colors">
                      {t(`home.practices.areas.${area.key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {t(`home.practices.areas.${area.key}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>
            ))}
          </div>

          <SlideUpOnScroll delay={500}>
            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-white bg-none text-navy-800 border border-silver/90 shadow-[0_18px_38px_-18px_rgba(0,0,0,0.6)] hover:bg-[#EAF1F8] hover:brightness-100 hover:shadow-[0_24px_44px_-18px_rgba(0,0,0,0.65)]"
              >
                <Link to="/practices">{t('home.practices.viewAll')}</Link>
              </Button>
            </div>
          </SlideUpOnScroll>
        </div>
      </Section>

      {/* About Section */}
      <Section
        id="about"
        overlay={
          <DecorativeElement position="top-left" opacity={0.25} className="animate-float">
            <Lines size={250} variant="diagonal" color="var(--brand-silver)" />
          </DecorativeElement>
        }
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInOnScroll>
                <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
                  {t('home.about.subtitle')}
                </Text>
              </FadeInOnScroll>
              <SlideUpOnScroll delay={100}>
                <Heading as="h2" size="lg" className="mt-2 mb-6">
                  {t('home.about.title')}
                </Heading>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={200}>
                <Text className="mb-4">
                  {t('home.about.description1')}
                </Text>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={300}>
                <Text muted className="mb-8">
                  {t('home.about.description2')}
                </Text>
              </SlideUpOnScroll>
              <SlideUpOnScroll delay={400}>
                <Button asChild size="lg">
                  <Link to="/about">{t('home.about.cta')}</Link>
                </Button>
              </SlideUpOnScroll>
            </div>
            <SlideUpOnScroll delay={200}>
              <div className="aspect-video overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-lg rounded-lg">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/team/trusted-legal-attorney-mobile.webp" />
                  <source media="(max-width: 1024px)" srcSet="/images/team/trusted-legal-attorney-tablet.webp" />
                  <img
                    src="/images/team/trusted-legal-attorney-desktop.webp"
                    alt="Attorney consulting with client at Delgado Legal P.A."
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </picture>
              </div>
            </SlideUpOnScroll>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 flex items-center justify-center relative overflow-hidden" id="testimonials">
        {/* JS-transform parallax: bg-fixed is unreliable on iOS/Android */}
        <div
          ref={parallaxRef}
          aria-hidden="true"
          className="absolute inset-x-0 -top-[16%] h-[132%] bg-cover bg-center bg-no-repeat grayscale-[0.3] contrast-[1.05] saturate-[1.05] will-change-transform backface-hidden"
          style={{ backgroundImage: "url('/images/backgrounds/testimonials/testimonials-bg-desktop.webp')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-[180deg,rgba(248,250,253,0.9)_0%,rgba(238,243,248,0.82)_50%,rgba(228,235,244,0.9)_100%]"
        />

        <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInOnScroll>
              <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
                {t('home.testimonials.subtitle')}
              </Text>
            </FadeInOnScroll>
            <SlideUpOnScroll delay={100}>
              <Heading as="h2" size="lg" className="mt-2 mb-4">
                {t('home.testimonials.title')}
              </Heading>
            </SlideUpOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <SlideUpOnScroll key={index} delay={100 + index * 150}>
                <Card className="bg-background h-full hover:-translate-y-1 hover:border-edge hover:shadow-[var(--shadow-card-hover)]">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <blockquote className="flex flex-col flex-1">
                      <Text className="italic text-foreground/80">"{testimonial.quote}"</Text>
                      <footer className="flex items-center gap-3 mt-auto pt-4">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover border-2 border-edge"
                          loading="lazy"
                        />
                        <div>
                          <Text as="cite" className="not-italic font-semibold block">
                            {testimonial.author}
                          </Text>
                          <Text size="sm" muted>{t(testimonial.roleKey)}</Text>
                        </div>
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </SlideUpOnScroll>
            ))}
          </div>
          
          <SlideUpOnScroll delay={500}>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/testimonials">{t('home.testimonials.viewAll')}</Link>
              </Button>
            </div>
          </SlideUpOnScroll>
        </div>
        </div>
      </section>

      <CTABanner translationKeyPrefix="home.cta" />
      <Footer />
    </>
  );
}
