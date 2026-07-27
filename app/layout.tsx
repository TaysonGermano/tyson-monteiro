import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "./theme/ThemeProvider";
import Navbar from "../components/Navbar";
import ScroolToTop from "../components/ScroolToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import LeadPopup from "../components/LeadPopup";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}, ${SITE.jobTitle} in Cape Town`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  applicationName: `${SITE.name} Portfolio`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE.url,
    siteName: `${SITE.name}, ${SITE.jobTitle}`,
    title: `${SITE.name}, ${SITE.jobTitle} in Cape Town`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}, ${SITE.jobTitle} in Cape Town`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

// Runs before paint to set the correct theme class and avoid a flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark =
      stored === "dark" ||
      (stored !== "light" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <JsonLd />
      </head>
      <body
        className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}
      >
        <ThemeProvider>
          <Analytics />
          <header>
            <Navbar />
          </header>
          <main className="mx-auto max-w-5xl px-4">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScroolToTop />
          <LeadPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
