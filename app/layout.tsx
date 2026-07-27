import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "./theme/ThemeProvider";
import Navbar from "../components/Navbar";
import ScroolToTop from "../components/ScroolToTop";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tyson Monteiro - Fullstack Developer",
  description:
    "Fullstack developer based in Cape Town, South Africa. Building web apps, mobile apps, APIs and websites — and available to work with you.",
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
      </head>
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white`}>
        <ThemeProvider>
          <Analytics />
          <header>
            <Navbar />
          </header>
          <main className="mx-auto max-w-5xl px-4">{children}</main>
          <Footer />
          <ScroolToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
