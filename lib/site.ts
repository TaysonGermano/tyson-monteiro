// Central site configuration. Reused by metadata, sitemap, robots,
// structured data (JSON-LD) and the WhatsApp button so everything
// stays consistent from one place.

export const SITE = {
  name: "Tyson Monteiro",
  jobTitle: "Fullstack Developer",
  url: "https://tysonmonteiro.dev",
  // No trailing slash — used to build absolute URLs.
  description:
    "Tyson Monteiro is a fullstack developer in Cape Town, South Africa, building web apps, mobile apps, APIs and websites for businesses. Available to work with you.",
  email: "taysongermano@gmail.com",
  // E.164, no spaces or symbols — used for tel:, wa.me and schema.
  phone: "+27834823694",
  phoneDisplay: "+27 83 482 3694",
  linkedin: "https://www.linkedin.com/in/tyson-monteiro-59227a158/",
  github: "https://github.com/TaysonGermano",
  cvUrl: "https://rxresu.me/taysongermano/fullstack-developer",
  location: {
    city: "Cape Town",
    region: "Western Cape",
    country: "South Africa",
    countryCode: "ZA",
  },
  // Primary search terms we want to rank for (commercial + geo intent).
  keywords: [
    "fullstack developer Cape Town",
    "web developer Cape Town",
    "software developer Cape Town",
    "web app development South Africa",
    "React developer Cape Town",
    "Next.js developer South Africa",
    "mobile app developer Cape Town",
    "API developer South Africa",
    "website development Cape Town",
    "hire developer South Africa",
    "freelance developer Cape Town",
    "WordPress maintenance Cape Town",
  ],
} as const;

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
