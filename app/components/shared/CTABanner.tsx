import { Link } from "react-router";
import { Section } from "~/components/layout";
import { SlideUpOnScroll } from "~/components/effects";
import { DecorativeElement, Column } from "~/components/decorations";
import { Heading, Text } from "~/components/shared/Typography";
import { Button } from "~/components/ui/button";
import { useTranslation } from "~/providers/TranslationProvider";

interface CTABannerProps {
  translationKeyPrefix: string;
  linkTo?: string;
}

export function CTABanner({ translationKeyPrefix, linkTo = "/contact" }: CTABannerProps) {
  const { t } = useTranslation();

  return (
    <Section background="accent-solid" size="compact">
      <DecorativeElement position="center-left" opacity={0.25}>
        <Column size={300} color="white" />
      </DecorativeElement>
      <DecorativeElement position="center-right" opacity={0.25}>
        <Column size={300} color="white" />
      </DecorativeElement>

      <div className="max-w-3xl mx-auto text-center">
        <SlideUpOnScroll>
          <Heading as="h2" size="lg" className="mb-6">
            {t(`${translationKeyPrefix}.title`)}
          </Heading>
        </SlideUpOnScroll>
        <SlideUpOnScroll delay={100}>
          <Text className="mb-10 text-accent-foreground/80 text-lg">
            {t(`${translationKeyPrefix}.description`)}
          </Text>
        </SlideUpOnScroll>
        <SlideUpOnScroll delay={200}>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to={linkTo}>{t(`${translationKeyPrefix}.button`)}</Link>
          </Button>
        </SlideUpOnScroll>
      </div>
    </Section>
  );
}
