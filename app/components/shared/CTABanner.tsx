import { Link } from "react-router";
import { Section } from "~/components/layout";
import { SlideUpOnScroll } from "~/components/effects";
import { Heading, Text } from "~/components/shared/Typography";
import { Button } from "~/components/ui/button";
import { tf } from "~/lib/utils";
import { useTranslation } from "~/providers/TranslationProvider";

const PHONE_DISPLAY = "(786) 762-2389";
const PHONE_HREF = "tel:+17867622389";

/** A fluted navy column, faded into the silver band at the section edges. */
function FlutedColumn({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1/2 hidden w-[76px] -translate-y-1/2 select-none flex-col items-center overflow-hidden opacity-[0.16] lg:flex ${
        side === "left" ? "left-4" : "right-4"
      }`}
    >
      <div className="h-3 w-full bg-navy-900" />
      <div className="h-[7px] w-[86%] bg-navy-900" />
      <div
        className="h-[230px] w-[70%] bg-navy-900"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(216,227,238,0.85) 0 2px, transparent 2px 11px)",
        }}
      />
      <div className="h-[7px] w-[86%] bg-navy-900" />
      <div className="h-3 w-full bg-navy-900" />
    </div>
  );
}

interface CTABannerProps {
  translationKeyPrefix: string;
  linkTo?: string;
  /** Show the tap-to-call secondary button alongside the primary CTA. */
  showPhone?: boolean;
}

export function CTABanner({
  translationKeyPrefix,
  linkTo = "/contact",
  showPhone = true,
}: CTABannerProps) {
  const { t } = useTranslation();

  return (
    <Section
      background="accent-solid"
      size="compact"
      overlay={
        <>
          <FlutedColumn side="left" />
          <FlutedColumn side="right" />
        </>
      }
    >
      <div className="mx-auto max-w-[720px]">
        <SlideUpOnScroll>
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-edge bg-white px-6 py-8 text-center shadow-[0_30px_60px_-40px_rgba(10,27,46,0.45)] md:px-12 md:py-13">
            <span className="text-xs font-bold uppercase leading-none tracking-[0.2em] text-steel">
              {tf(t, "site.cta.nextStep", "Next step")}
            </span>
            <Heading as="h2" size="lg" className="text-navy-900">
              {t(`${translationKeyPrefix}.title`)}
            </Heading>
            <Text className="max-w-[520px] text-ink-body text-pretty">
              {t(`${translationKeyPrefix}.description`)}
            </Text>
            <div className="mt-1 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="min-w-[238px]">
                <Link to={linkTo}>{t(`${translationKeyPrefix}.button`)}</Link>
              </Button>
              {showPhone && (
                <Button asChild variant="silver" size="lg" className="min-w-[238px]">
                  <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                </Button>
              )}
            </div>
          </div>
        </SlideUpOnScroll>
      </div>
    </Section>
  );
}
