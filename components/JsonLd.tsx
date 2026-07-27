import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/contants";

// Structured data (schema.org) served as a single JSON-LD graph.
// Helps search engines understand who Tyson is, where he works,
// and which services he offers — improving rich-result eligibility
// and local relevance for Cape Town / South Africa searches.
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE.url}/#person`,
        name: SITE.name,
        url: SITE.url,
        jobTitle: SITE.jobTitle,
        email: `mailto:${SITE.email}`,
        telephone: SITE.phone,
        image: `${SITE.url}/tysonmonteiro.jpg`,
        sameAs: [SITE.linkedin, SITE.github],
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.location.city,
          addressRegion: SITE.location.region,
          addressCountry: SITE.location.countryCode,
        },
        knowsAbout: [
          "Web development",
          "Web app development",
          "Mobile app development",
          "React",
          "Next.js",
          "React Native",
          "Node.js",
          "API development",
          "WordPress",
          "SEO",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#business`,
        name: `${SITE.name} — ${SITE.jobTitle}`,
        url: SITE.url,
        description: SITE.description,
        email: `mailto:${SITE.email}`,
        telephone: SITE.phone,
        image: `${SITE.url}/tysonmonteiro.jpg`,
        priceRange: "$$",
        founder: { "@id": `${SITE.url}/#person` },
        areaServed: [
          { "@type": "City", name: SITE.location.city },
          { "@type": "Country", name: SITE.location.country },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.location.city,
          addressRegion: SITE.location.region,
          addressCountry: SITE.location.countryCode,
        },
        sameAs: [SITE.linkedin, SITE.github],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Development services",
          itemListElement: SERVICES.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: `${SITE.name} — ${SITE.jobTitle}`,
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": `${SITE.url}/#person` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
