import React from "react";
import Link from "next/link";
// import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
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
  );
}
