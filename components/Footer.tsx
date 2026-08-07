import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 py-8 mt-10 border-t border-black/15 dark:border-white/15">
      <div className="flex justify-center gap-5">
        <Link
          href="https://www.linkedin.com/in/tyson-monteiro-59227a158/"
          target="_blank"
          aria-label="LinkedIn"
          className="accent-text no-underline transition-colors"
        >
          <Linkedin size={20} />
        </Link>
        <Link
          href="mailto:taysongermano@gmail.com"
          aria-label="Email"
          className="accent-text no-underline transition-colors"
        >
          <Mail size={20} />
        </Link>
      </div>
      <p className="mt-4 text-sm text-center text-black/50 dark:text-white/50">
        &copy; Tyson Monteiro {new Date().getFullYear()}
      </p>
    </footer>
  );
}
