import "./globals.css";
import StoreProvider from "./redux/StoreProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import ScroolToTop from "../components/ScroolToTop";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tyson Monteiro - React Developer",
  description: "Fullstack Javascript developer based in Cape Town South Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <Analytics />
      <html lang="en">
        <body
          className={`${inter.className} dark:bg-[#0F172A] dark:text-slate-300`}
        >
          <header>
            <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:hidden"></div>
            <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:hidden"></div>
            <Navbar />
          </header>
          <main className="mx-auto max-w-7xl px-4">{children}</main>
          <Footer />
          <ScroolToTop />
        </body>
      </html>
    </StoreProvider>
  );
}
