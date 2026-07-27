import Link from "next/link";
import type { Metadata } from "next";
import { Mail, Phone, Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name}, a ${SITE.jobTitle.toLowerCase()} in ${SITE.location.city}, ${SITE.location.country}. Email, phone or LinkedIn.`,
  alternates: { canonical: "/contact" },
};

const CONTACTS = [
  {
    Icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phone}`,
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "tyson-monteiro",
    href: SITE.linkedin,
  },
];

export default function ContactPage() {
  return (
    <section className="py-14 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-extrabold">Contact</h1>
      <p className="mt-3 text-black/60 dark:text-white/60">
        The best ways to reach me. For project requests, use the{" "}
        <Link href="/work-with-me">work with me</Link> form.
      </p>

      <ul className="mt-8 border-t border-black/15 dark:border-white/15">
        {CONTACTS.map(({ Icon, label, value, href }) => (
          <li
            key={label}
            className="flex items-center gap-4 border-b border-black/15 dark:border-white/15 py-5"
          >
            <Icon size={20} className="shrink-0" />
            <div>
              <p className="text-sm text-black/60 dark:text-white/60">
                {label}
              </p>
              <Link
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
              >
                {value}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
