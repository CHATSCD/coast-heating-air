import {
  PHONE_SCHEMA,
  business,
  faqs,
  rating,
  serviceArea,
  services,
  testimonials,
} from "@/lib/business";
import { siteUrl } from "@/lib/site";

/**
 * schema.org structured data (JSON-LD) built from the same content the page
 * renders, so the two can never drift apart.
 *
 * TODO (confirm with owner before launch): add a real street address + geo
 * coordinates if they want a Google Business Profile style local listing.
 */
export function buildSchema() {
  const url = siteUrl();
  const businessId = `${url}/#business`;
  const allDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const localBusiness = {
    "@type": ["HVACBusiness", "LocalBusiness"],
    "@id": businessId,
    name: business.name,
    alternateName: business.shortName,
    slogan: business.tagline,
    description: `${business.name} provides same-day emergency AC repair, refrigerant leak repair, compressor repair, drain line clearing and seasonal HVAC tune-ups across the Mississippi Gulf Coast, including Ocean Springs, Biloxi, Gautier, Pascagoula, Gulfport and all of Jackson and Harrison County. Licensed, bonded and insured with ${business.yearsInBusiness} on the Gulf Coast and ${rating.value} stars from ${rating.count} reviews. Average emergency response time ${business.responseTime}.`,
    url,
    telephone: PHONE_SCHEMA,
    priceRange: business.priceRange,
    logo: `${url}/icon.svg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: "US",
    },
    areaServed: [
      ...serviceArea.cities.map((c) => ({ "@type": "City", name: c.city })),
      ...serviceArea.counties.map((c) => ({
        "@type": "AdministrativeArea",
        name: c,
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "emergency",
        telephone: PHONE_SCHEMA,
        areaServed: "US-MS",
        availableLanguage: ["English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: allDays,
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    knowsAbout: [
      "Emergency air conditioning repair",
      "AC outage repair",
      "Refrigerant leak detection and repair",
      "Compressor repair",
      "Condensate drain line clearing",
      "HVAC seasonal tune-ups",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.blurb,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: rating.countNumeric,
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      itemReviewed: { "@id": businessId },
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.stars),
        bestRating: "5",
      },
      reviewBody: t.quote,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${url}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, faqPage],
  };
}
