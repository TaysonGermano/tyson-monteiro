import "./globals.css";
import StoreProvider from "./redux/StoreProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import ScroolToTop from "../components/ScroolToTop";

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
          <footer className="mx-auto max-w-7xl px-4 py-5 mt-5 border-t dark:border-[#e2e8f00d]">
            <p className="text-sm text-slate-300 text-center">
              &copy; Tyson Monteiro {new Date().getFullYear()} &#183; built with
              ♥
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
    </StoreProvider>
  );
}
