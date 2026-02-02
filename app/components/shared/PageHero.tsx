import { Section } from "~/components/layout";
import { SlideUpOnScroll } from "~/components/effects";
import { DecorativeElement, ArtDecoCorner } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { useTranslation } from "~/providers/TranslationProvider";

interface PageHeroProps {
  subtitleKey: string;
  titleKey: string;
  descriptionKey: string;
}

export function PageHero({
  subtitleKey,
  titleKey,
  descriptionKey,
}: PageHeroProps) {
  const { t } = useTranslation();

  return (
    <Section size="hero" className="!min-h-[300px] bg-gradient-to-br from-[#1e3a5f] to-[var(--brand-navy)] text-white">
      <DecorativeElement position="top-left" opacity={0.60}>
        <ArtDecoCorner size={100} corner="top-left" color="var(--brand-gold)" />
      </DecorativeElement>

      <DecorativeElement position="bottom-right" opacity={0.60}>
        <ArtDecoCorner size={100} corner="bottom-right" color="var(--brand-gold)" />
      </DecorativeElement>

      <div className="max-w-4xl mx-auto text-center pb-16">
        <SlideUpOnScroll>
          <Text as="span" size="sm" className="text-[var(--brand-gold)] font-semibold uppercase tracking-widest mb-4 block">
            {t(subtitleKey)}
          </Text>
        </SlideUpOnScroll>

        <SlideUpOnScroll delay={100}>
          <Heading as="h1" size="xl" className="mb-6">
            {t(titleKey)}
          </Heading>
        </SlideUpOnScroll>

        <SlideUpOnScroll delay={200}>
          <div className="min-h-[81px] flex items-center justify-center md:min-h-0">
            <Text size="lg" className="max-w-2xl text-gray-300 line-clamp-3 md:line-clamp-none">
              {t(descriptionKey)}
            </Text>
          </div>
        </SlideUpOnScroll>
      </div>
    </Section>
  );
}
