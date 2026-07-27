import type { Metadata } from "next";
import { SITE } from "@/lib/site";

// The page itself is a client component, so metadata lives in this
// route-level layout.
export const metadata: Metadata = {
  title: "Work with me",
  description: `Request web app, mobile app, API, website, SEO or WordPress work from ${SITE.name}, a ${SITE.jobTitle.toLowerCase()} in ${SITE.location.city}, ${SITE.location.country}.`,
  alternates: { canonical: "/work-with-me" },
};

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
