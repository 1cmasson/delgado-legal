import { Section } from "~/components/layout";
import { SlideUpOnScroll } from "~/components/effects";
import { Orb, SheenRule } from "~/components/decorations";
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
    <Section
      size="hero"
      className="!min-h-[300px] bg-[image:var(--grad-hero)] text-white"
      overlay={
        <>
          <SheenRule />
          <Orb
            className="-top-[190px] -right-[130px] h-[560px] w-[560px]"
            strength={0.24}
          />
          <Orb
            className="-bottom-[240px] -left-[170px] h-[480px] w-[480px]"
            strength={0.13}
            reverse
          />
        </>
      }
    >
      <div className="max-w-4xl mx-auto text-center pb-16">
        <SlideUpOnScroll>
          <Text
            as="span"
            size="sm"
            className="text-silver font-semibold uppercase tracking-widest mb-4 block"
          >
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
            <Text size="lg" className="max-w-2xl text-white/80 line-clamp-3 md:line-clamp-none">
              {t(descriptionKey)}
            </Text>
          </div>
        </SlideUpOnScroll>
      </div>
    </Section>
  );
}
