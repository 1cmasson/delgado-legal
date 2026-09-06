import type { Route } from "./+types/card.michael";
import { DigitalCard } from "~/components/cards/DigitalCard";
import { SITE_URL } from "~/lib/schema";

export function meta({}: Route.MetaArgs) {
  const title = "Michael Delgado | Delgado Legal P.A.";
  const description =
    "Michael Delgado, Attorney and Partner at Delgado Legal P.A. in Miami Lakes, FL. Call, email, get directions, or save his contact card.";
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: `${SITE_URL}/card/michael` },
  ];
}

export default function MichaelCard() {
  return (
    <DigitalCard
      slug="michael-delgado"
      photo="/images/team/michael.webp"
      nameKey="attorneys.michael.name"
      nameFallback="Michael Delgado"
      roleKey="attorneys.michael.role"
      roleFallback="Attorney / Partner"
      bioKey="attorneys.michael.bio"
      tagKeys={[
        "attorneys.michael.specializations.realEstateConsumer",
        "home.practices.areas.realEstate.title",
        "home.practices.areas.estate.title",
      ]}
      bioAnchor="/attorneys#michael"
      linkedin="https://www.linkedin.com/in/michael-delgado-b9728927/"
      superLawyers="https://profiles.superlawyers.com/florida/hialeah/lawyer/michael-delgado/fc4bc44e-6b76-4b98-b79a-f6668d618255.html"
      shareTitle="Michael Delgado — Delgado Legal P.A."
      shareText="Michael Delgado, Attorney / Partner at Delgado Legal P.A., Miami Lakes. (786) 762-2389"
      colleague={{
        href: "/card/vanessa",
        photo: "/images/team/vanessa.webp",
        nameKey: "attorneys.vanessa.name",
        roleKey: "attorneys.vanessa.role",
        viewCardKey: "site.cards.viewHerCard",
        viewCardFallback: "View her card",
      }}
    />
  );
}
