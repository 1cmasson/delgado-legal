import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  FileText,
  Linkedin,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Share2,
  UserPlus,
} from "lucide-react";
import { Orb, SheenRule } from "~/components/decorations";
import { SiteLogo } from "~/components/shared/SiteLogo";
import { tf } from "~/lib/utils";
import { useTranslation } from "~/providers/TranslationProvider";

export const OFFICE = {
  phoneDisplay: "(786) 762-2389",
  phoneHref: "tel:+17867622389",
  email: "michael@delgadolegalpa.com",
  maps: "https://maps.app.goo.gl/aEVBbRF9mQwFji8x6",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28709.749853822606!2d-80.33605466636524!3d25.911615294474753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a58d49b6e8bd%3A0x293b774b275cf1a9!2sDelgado%20Legal%20P.A.!5e0!3m2!1sen!2sus!4v1770048205584!5m2!1sen!2sus",
  addressLine1: "6500 Cow Pen Rd, Suite 304",
  addressLine2: "Miami Lakes, FL 33014",
} as const;

export interface Colleague {
  /** Route of the other partner's card, e.g. `/card/vanessa`. */
  href: string;
  photo: string;
  nameKey: string;
  roleKey: string;
  /** `site.cards.viewHerCard` or `site.cards.viewHisCard`. */
  viewCardKey: string;
  viewCardFallback: string;
}

export interface DigitalCardProps {
  /** vCard filename stem under /vcards, e.g. `michael-delgado`. */
  slug: string;
  photo: string;
  nameKey: string;
  nameFallback: string;
  roleKey: string;
  roleFallback: string;
  bioKey: string;
  /** Translation keys for the specialization pills. */
  tagKeys: string[];
  /** Law school and graduation year, mirroring app/routes/attorneys.tsx. */
  education: string;
  graduationYear: string;
  /** Years of practice, e.g. "16+". */
  experience: string;
  /** Anchor on /attorneys for the "Full bio" link. */
  bioAnchor: string;
  linkedin: string;
  /** Optional Super Lawyers profile. */
  superLawyers?: string;
  shareTitle: string;
  shareText: string;
  colleague: Colleague;
}

/** Office hours are the firm's, not the visitor's — pin them to Miami time. */
function isOfficeOpen(now: Date): boolean {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";

  const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  return isWeekday && minutes >= 9 * 60 && minutes < 18 * 60;
}

const TILE_GLASS =
  "flex min-h-[68px] items-center gap-3 rounded-2xl border border-silver/35 bg-white/8 p-4 text-white transition-[border-color,background] hover:border-silver hover:bg-white/15";
const TILE_ICON =
  "inline-flex size-[38px] shrink-0 items-center justify-center rounded-[11px] bg-silver/15 text-edge";
const OUTLINE_LINK =
  "inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#C0CCDA] px-4 text-sm font-semibold text-navy-700 transition-colors hover:border-steel";

export function DigitalCard(props: DigitalCardProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [saved, setSaved] = useState(false);
  const [shareLabelKey, setShareLabelKey] = useState<
    "shareCard" | "sharing" | "linkCopied" | "copyFailed"
  >("shareCard");

  // Resolved client-side only: the server has no idea what time it is in Miami
  // relative to the visitor, and rendering a guess would mismatch on hydration.
  useEffect(() => {
    const update = () => setIsOpen(isOfficeOpen(new Date()));
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!saved) return;
    const timer = setTimeout(() => setSaved(false), 2200);
    return () => clearTimeout(timer);
  }, [saved]);

  useEffect(() => {
    if (shareLabelKey === "shareCard") return;
    const timer = setTimeout(() => setShareLabelKey("shareCard"), 2200);
    return () => clearTimeout(timer);
  }, [shareLabelKey]);

  const handleShare = async () => {
    const data = {
      title: props.shareTitle,
      text: props.shareText,
      url: window.location.href,
    };
    if (typeof navigator.share === "function") {
      setShareLabelKey("sharing");
      try {
        await navigator.share(data);
      } catch {
        /* the visitor dismissed the sheet */
      }
      return;
    }
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareLabelKey("linkCopied");
      } catch {
        setShareLabelKey("copyFailed");
      }
      return;
    }
    setShareLabelKey("copyFailed");
  };

  const shareLabels = {
    shareCard: "Share card",
    sharing: "Sharing…",
    linkCopied: "Link copied",
    copyFailed: "Copy failed",
  } as const;

  return (
    <div className="flex min-h-screen flex-col bg-[#EEF2F7]">
      {/* Header */}
      <section className="relative overflow-hidden rounded-b-[32px] bg-[image:var(--grad-footer)] bg-[position:100%] pt-[38px] pb-[46px] shadow-[0_34px_70px_-34px_rgba(10,27,46,0.85)]">
        <SheenRule />
        <Orb className="-top-[180px] -right-[120px] h-[520px] w-[520px]" strength={0.26} />
        <Orb className="-bottom-[220px] -left-[160px] h-[460px] w-[460px]" strength={0.14} reverse />

        <div className="relative z-[1] mx-auto flex max-w-[760px] flex-col gap-7 px-5">
          <Link
            to="/"
            aria-label="Delgado Legal - Home"
            className="block w-[164px] max-w-full self-start"
          >
            <SiteLogo theme="dark" />
          </Link>

          <div className="flex flex-wrap items-center gap-[22px]">
            <div className="size-[118px] shrink-0 rounded-full bg-linear-[135deg,#F7F9FC,#8FA3B8] p-[3px]">
              <img
                src={props.photo}
                alt={tf(t, props.nameKey, props.nameFallback)}
                className="size-full rounded-full object-cover object-[center_20%]"
              />
            </div>
            <div className="flex min-w-0 flex-1 basis-[220px] flex-col gap-2">
              <h1 className="font-serif text-3xl font-semibold leading-[1.06] tracking-[-0.02em] text-white md:text-[2.625rem]">
                {tf(t, props.nameKey, props.nameFallback)}
              </h1>
              <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-silver">
                {tf(t, props.roleKey, props.roleFallback)}
              </span>
              <span className="text-[15px] text-white/80">
                {tf(t, "site.cards.firmLine", "Delgado Legal P.A. · Miami Lakes, FL")}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {props.tagKeys.map((key) => (
              <span
                key={key}
                className="rounded-full border border-silver/35 bg-silver/15 px-3 py-1.5 text-xs font-semibold tracking-[0.04em] text-[#DCE6F0]"
              >
                {t(key)}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={OFFICE.phoneHref}
              className="flex min-h-[68px] items-center gap-3 rounded-2xl bg-linear-[135deg,#F7F9FC_0%,#C9D6E4_55%,#A9BBCE_100%] p-4 text-navy-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_30px_-20px_rgba(0,0,0,0.6)] transition-[filter] hover:brightness-105"
            >
              <span className="inline-flex size-[38px] shrink-0 items-center justify-center rounded-[11px] bg-navy-900 text-edge">
                <Phone className="size-[18px]" aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-col leading-[1.25]">
                <span className="text-[15px] font-bold">
                  {tf(t, "site.cards.call", "Call")}
                </span>
                <span className="text-[13px] text-[#33506F]">{OFFICE.phoneDisplay}</span>
              </span>
            </a>

            <a href={`mailto:${OFFICE.email}`} className={TILE_GLASS}>
              <span className={TILE_ICON}>
                <Mail className="size-[18px]" aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-col leading-[1.25]">
                <span className="text-[15px] font-semibold">
                  {tf(t, "site.cards.emailOffice", "Email the office")}
                </span>
                <span className="truncate text-[13px] text-silver">{OFFICE.email}</span>
              </span>
            </a>

            <a
              href={OFFICE.maps}
              target="_blank"
              rel="noopener noreferrer"
              className={TILE_GLASS}
            >
              <span className={TILE_ICON}>
                <Navigation className="size-[18px]" aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-col leading-[1.25]">
                <span className="text-[15px] font-semibold">
                  {tf(t, "site.cards.directions", "Directions")}
                </span>
                <span className="truncate text-[13px] text-silver">
                  {tf(t, "site.cards.suite", OFFICE.addressLine1)}
                </span>
              </span>
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* A static .vcf beats a Blob here: iOS Safari handles blob downloads
                of vCards unreliably, and the file ships with the site anyway. */}
            <a
              href={`/vcards/${props.slug}.vcf`}
              download={`${props.slug}.vcf`}
              onClick={() => setSaved(true)}
              className="inline-flex min-h-[54px] flex-1 basis-[200px] items-center justify-center gap-2.5 rounded-[14px] border border-silver/50 bg-white/10 px-[22px] text-[15px] font-semibold text-white transition-[background,border-color] hover:border-silver hover:bg-white/[0.18]"
            >
              <UserPlus className="size-[18px]" aria-hidden="true" />
              {saved
                ? tf(t, "site.cards.contactSaved", "Contact saved")
                : tf(t, "site.cards.saveContact", "Save contact")}
            </a>
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex min-h-[54px] flex-1 basis-[200px] cursor-pointer items-center justify-center gap-2.5 rounded-[14px] border border-silver/50 bg-white/10 px-[22px] text-[15px] font-semibold text-white transition-[background,border-color] hover:border-silver hover:bg-white/[0.18]"
            >
              <Share2 className="size-[18px]" aria-hidden="true" />
              {tf(t, `site.cards.${shareLabelKey}`, shareLabels[shareLabelKey])}
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[760px] px-5">
        {/* Bio */}
        <section className="mt-[26px] flex flex-col gap-4 rounded-[20px] border border-hairline bg-white p-[26px] shadow-[var(--shadow-card)]">
          <h2 className="font-serif text-xl font-semibold leading-tight">
            {tf(t, "site.cards.about", "About")}
          </h2>
          <p className="text-base leading-[1.65] text-ink-body text-pretty">{t(props.bioKey)}</p>
          <dl className="grid gap-3.5 pt-1.5 sm:grid-cols-2">
            <div className="flex flex-col gap-0.5">
              <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-steel">
                {tf(t, "attorneys.labels.education", "Education")}
              </dt>
              <dd className="text-[15px] text-ink-body">
                {props.education} ({props.graduationYear})
              </dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-steel">
                {tf(t, "attorneys.labels.experience", "Experience")}
              </dt>
              <dd className="text-[15px] text-ink-body">
                {props.experience} {tf(t, "attorneys.labels.years", "Years")}
              </dd>
            </div>
            <div className="flex flex-col gap-0.5 sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-steel">
                {tf(t, "site.cards.practiceFocus", "Practice focus")}
              </dt>
              <dd className="text-[15px] text-ink-body">
                {props.tagKeys.map((key) => t(key)).join(" · ")}
              </dd>
            </div>
          </dl>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <a
              href={props.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={OUTLINE_LINK}
            >
              <Linkedin className="size-4" aria-hidden="true" />
              LinkedIn
            </a>
            {props.superLawyers && (
              <a
                href={props.superLawyers}
                target="_blank"
                rel="noopener noreferrer"
                className={OUTLINE_LINK}
              >
                <FileText className="size-4" aria-hidden="true" />
                {tf(t, "site.cards.superLawyers", "Super Lawyers")}
              </a>
            )}
            <Link to={props.bioAnchor} className={OUTLINE_LINK}>
              <FileText className="size-4" aria-hidden="true" />
              {tf(t, "site.cards.fullBio", "Full bio")}
            </Link>
          </div>
        </section>

        {/* Hours + office */}
        <section className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="flex flex-col gap-[18px] self-start rounded-[20px] border border-hairline bg-white p-[26px] shadow-[var(--shadow-card)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-serif text-xl font-semibold leading-tight">
                {tf(t, "site.cards.hours", "Office hours")}
              </h2>
              {isOpen !== null && (
                <span
                  className={`inline-flex items-center gap-[7px] rounded-full border px-3 py-[5px] text-[13px] font-semibold ${
                    isOpen
                      ? "border-[#BFD9C9] bg-[#E7F1EA] text-[#1E5B37]"
                      : "border-[#D5DEE8] bg-[#EEF2F7] text-ink-body"
                  }`}
                >
                  <span
                    className={`size-[7px] rounded-full ${
                      isOpen ? "bg-[#1E5B37]" : "bg-[#8FA3B8]"
                    }`}
                  />
                  {isOpen
                    ? tf(t, "site.cards.openNow", "Open now")
                    : tf(t, "site.cards.closedNow", "Closed now")}
                </span>
              )}
            </div>
            <div className="flex flex-col text-[15px]">
              <div className="flex justify-between gap-4 border-b border-[#EDF1F6] py-[11px]">
                <span className="font-semibold">
                  {tf(t, "site.cards.weekdays", "Monday – Friday")}
                </span>
                <span className="text-ink-body">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between gap-4 border-b border-[#EDF1F6] py-[11px]">
                <span className="font-semibold">
                  {tf(t, "site.cards.saturday", "Saturday")}
                </span>
                <span className="text-ink-body">
                  {tf(t, "site.cards.byAppointment", "By appointment")}
                </span>
              </div>
              <div className="flex justify-between gap-4 py-[11px]">
                <span className="font-semibold">{tf(t, "site.cards.sunday", "Sunday")}</span>
                <span className="text-ink-body">{tf(t, "site.cards.closed", "Closed")}</span>
              </div>
            </div>
            <p className="text-sm leading-[1.55] text-ink-muted">
              {tf(
                t,
                "site.cards.hoursNote",
                "Hours shown in Miami Lakes local time. Call or email any time — messages left after hours are answered the next business day."
              )}
            </p>
          </article>

          <article className="flex flex-col overflow-hidden rounded-[20px] border border-hairline bg-white shadow-[var(--shadow-card)]">
            <div className="flex flex-col gap-2.5 px-[26px] pt-[26px] pb-[18px]">
              <h2 className="font-serif text-xl font-semibold leading-tight">
                {tf(t, "site.cards.office", "Office")}
              </h2>
              <p className="text-[15px] leading-relaxed text-ink-body">
                {OFFICE.addressLine1}
                <br />
                {OFFICE.addressLine2}
              </p>
              <a
                href={OFFICE.maps}
                target="_blank"
                rel="noopener noreferrer"
                className={`${OUTLINE_LINK} self-start`}
              >
                <MapPin className="size-4" aria-hidden="true" />
                {tf(t, "site.cards.openInMaps", "Open in Maps")}
              </a>
            </div>
            <div className="min-h-[210px] flex-1">
              <iframe
                src={OFFICE.mapsEmbed}
                title={tf(
                  t,
                  "site.cards.mapsTitle",
                  "Map of the Delgado Legal P.A. office in Miami Lakes"
                )}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full min-h-[210px] w-full border-0"
              />
            </div>
          </article>
        </section>
      </div>

      {/* Footer */}
      <section className="mt-7 flex-1 rounded-t-[32px] bg-[image:var(--grad-footer)] pt-9 pb-[30px]">
        <div className="mx-auto flex max-w-[760px] flex-col gap-[26px] px-5">
          <div className="flex flex-wrap items-center justify-between gap-[18px]">
            <div className="flex min-w-0 items-center gap-4">
              <div className="size-[66px] shrink-0 rounded-full bg-linear-[135deg,#F7F9FC,#8FA3B8] p-0.5">
                <img
                  src={props.colleague.photo}
                  alt={t(props.colleague.nameKey)}
                  className="size-full rounded-full object-cover object-[center_20%]"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-silver">
                  {tf(t, "site.cards.alsoAtFirm", "Also at the firm")}
                </span>
                <span className="font-serif text-lg font-semibold text-white">
                  {t(props.colleague.nameKey)}
                </span>
                <span className="text-sm text-white/[0.78]">{t(props.colleague.roleKey)}</span>
              </div>
            </div>
            <Link
              to={props.colleague.href}
              className="inline-flex min-h-12 items-center gap-2.5 rounded-[13px] bg-linear-[135deg,#F7F9FC_0%,#C9D6E4_55%,#A9BBCE_100%] px-5 text-[15px] font-semibold text-navy-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-[filter] hover:brightness-105"
            >
              {tf(t, props.colleague.viewCardKey, props.colleague.viewCardFallback)}
              <ArrowRight className="size-[18px]" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-silver/20 pt-[22px]">
            <p className="text-[13px] leading-[1.5] text-white/[0.62]">
              {tf(
                t,
                "site.cards.footerCard",
                "Delgado Legal P.A. — a full-service law firm and licensed title agent in Miami Lakes, Florida."
              )}
            </p>
            <div className="flex flex-wrap gap-[18px] text-[13px] font-semibold text-silver">
              <Link to="/" className="hover:text-white">
                {tf(t, "site.cards.fullWebsite", "Full website")}
              </Link>
              <Link to="/practices" className="hover:text-white">
                {tf(t, "site.cards.practiceAreas", "Practice areas")}
              </Link>
              <Link to="/contact" className="hover:text-white">
                {tf(t, "nav.contact", "Contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
