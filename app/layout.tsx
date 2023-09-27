import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import ScroolToTop from "./components/ScroolToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tyson Monteiro",
  description: "Fullstack Javascript developer based in Cape Town South Africa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#0F172A]`}>
        <Navbar />
        <main className="mx-auto sm:max-w-7xl px-4 relative">{children}</main>
        <footer className="mx-auto max-w-7xl px-4 py-5 mt-5 border-t dark:border-[#e2e8f00d]">
          <p className="text-sm text-slate-300 text-center">
            &copy; Tyson Monteiro {new Date().getFullYear()} &#183; built with ♥
          </p>
          <div className="flex justify-center gap-3 mt-3">
            <Link
              href="https://www.linkedin.com/in/tyson-monteiro-59227a158/"
              target="_blank"
            >
              <FaLinkedin size={20} color="#0b50b8" />
            </Link>
            <Link href="mailto:taysongermano@gmail.com" target="_blank">
              <FaEnvelope size={20} color="#cccccc" />
            </Link>
          </div>
        </footer>
        <ScroolToTop />
      </body>
    </html>
  );
}
