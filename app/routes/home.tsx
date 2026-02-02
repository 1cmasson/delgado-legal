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
import { DecorativeElement, Lines, ArtDecoCorner, Gavel } from "~/components/decorations";
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
      <section className="min-h-[900px] md:min-h-0 md:py-24 flex items-center justify-center relative overflow-hidden bg-primary">
        {/* Background Image - Containerized */}
        <div className="absolute inset-0 flex justify-center z-0">
          <div className="relative w-full max-w-7xl h-full">
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/backgrounds/hero/hero-mobile.webp" />
              <source media="(max-width: 1024px)" srcSet="/images/backgrounds/hero/hero-tablet.webp" />
              <img
                src="/images/backgrounds/hero/hero-desktop.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-primary/70" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <SlideUpOnScroll>
            <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-widest mb-4 block">
              {t('home.hero.subtitle')}
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={100}>
            <Heading as="h1" size="xl" className="mb-6 text-white">
              {t('home.hero.title')}
            </Heading>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={200}>
            <Text size="lg" className="max-w-2xl mx-auto mb-10 text-white/80">
              {t('home.hero.description')}
            </Text>
          </SlideUpOnScroll>
          
          <SlideUpOnScroll delay={300}>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">{t('home.hero.ctaPrimary')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/practices">{t('home.hero.ctaSecondary')}</Link>
              </Button>
            </div>
          </SlideUpOnScroll>
        </div>
      </section>

      {/* Practice Areas Section */}
      <Section background="muted" id="practices">
        <DecorativeElement position="top-right" opacity={0.4} className="animate-float">
          <Gavel size={200} color="var(--brand-gold)" />
        </DecorativeElement>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInOnScroll>
              <Text as="span" size="sm" className="text-accent font-semibold uppercase tracking-wider">
                {t('home.practices.subtitle')}
              </Text>
            </FadeInOnScroll>
            <SlideUpOnScroll delay={100}>
              <Heading as="h2" size="lg" className="mt-2 mb-4">
                {t('home.practices.title')}
              </Heading>
            </SlideUpOnScroll>
            <SlideUpOnScroll delay={200}>
              <Text muted className="max-w-2xl mx-auto">
                {t('home.practices.description')}
              </Text>
            </SlideUpOnScroll>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreaKeys.map((area, index) => (
              <SlideUpOnScroll key={area.key} delay={100 + index * 100}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full bg-background">
                  <CardHeader>
                    <area.icon className="w-10 h-10 mb-2 text-accent" aria-hidden="true" />
                    <CardTitle className="group-hover:text-accent transition-colors">
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
              <Button asChild variant="outline" size="lg">
                <Link to="/practices">{t('home.practices.viewAll')}</Link>
              </Button>
            </div>
          </SlideUpOnScroll>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <DecorativeElement position="top-left" opacity={0.25} className="animate-float">
          <Lines size={250} variant="diagonal" color="var(--brand-gold)" />
        </DecorativeElement>
        
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
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
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
        {/* Parallax Background - Mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale md:hidden"
          style={{ backgroundImage: "url('/images/backgrounds/testimonials/testimonials-bg-mobile.webp')" }}
        />
        {/* Parallax Background - Desktop */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed grayscale hidden md:block"
          style={{ backgroundImage: "url('/images/backgrounds/testimonials/testimonials-bg-desktop.webp')" }}
        />
        <div className="absolute inset-0 bg-muted/85" />
        
        <DecorativeElement position="top-left" opacity={0.55}>
          <ArtDecoCorner size={80} corner="top-left" color="var(--brand-gold)" />
        </DecorativeElement>
        <DecorativeElement position="bottom-right" opacity={0.55}>
          <ArtDecoCorner size={80} corner="bottom-right" color="var(--brand-gold)" />
        </DecorativeElement>
        
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
                <Card className="bg-background h-full hover:shadow-md transition-shadow">
                  <CardContent className="pt-6 h-full flex flex-col">
                    <blockquote className="flex flex-col flex-1">
                      <Text className="italic text-foreground/80">"{testimonial.quote}"</Text>
                      <footer className="flex items-center gap-3 mt-auto pt-4">
                        <img
                          src={testimonial.image}
                          alt=""
                          className="w-12 h-12 rounded-full object-cover border-2 border-accent"
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
              <Button asChild variant="outline" size="lg">
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
