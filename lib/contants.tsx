import {
  Building2,
  LayoutGrid,
  Smartphone,
  Server,
  Globe,
  Search,
  Wrench,
  LifeBuoy,
} from "lucide-react";
import type { Project } from "@/lib/types";

export const FILTERS = [
  {
    name: "All Projects",
    active: true,
    id: 0,
  },
  {
    name: "Reactjs",
    active: false,
    id: 1,
  },
  {
    name: "Typescript",
    active: false,
    id: 2,
  },
  {
    name: "Nextjs",
    active: false,
    id: 3,
  },
  {
    name: "Tailwind CSS",
    active: false,
    id: 4,
  },
  {
    name: "Nodejs",
    active: false,
    id: 5,
  },
  {
    name: "Mongodb",
    active: false,
    id: 6,
  },
  {
    name: "MUI",
    active: false,
    id: 7,
  },
  {
    name: "Jquery",
    active: false,
    id: 9,
  },
  {
    name: "My SQL",
    active: false,
    id: 10,
  },
  {
    name: "PHP",
    active: false,
    id: 11,
  },
  {
    name: "React Native",
    active: false,
    id: 12,
  },
  {
    name: "Expo Go",
    active: false,
    id: 13,
  },
  {
    name: "React Native Paper",
    active: false,
    id: 14,
  },
  {
    name: "Redux",
    active: false,
    id: 15,
  },
  {
    name: "Zustand",
    active: false,
    id: 18,
  },
  {
    name: "AI",
    active: false,
    id: 19,
  },
  {
    name: "Postgres",
    active: false,
    id: 20,
  },
  {
    name: "Neon",
    active: false,
    id: 21,
  },
  {
    name: "Drizzle ORM",
    active: false,
    id: 22,
  },
  {
    name: "Better Auth",
    active: false,
    id: 23,
  },
  {
    name: "Vitest",
    active: false,
    id: 24,
  },
  {
    name: "Playwright",
    active: false,
    id: 25,
  },
  {
    name: "Turso",
    active: false,
    id: 26,
  },
  {
    name: "Upstash Redis",
    active: false,
    id: 27,
  },
  {
    name: "Resend",
    active: false,
    id: 28,
  },
  {
    name: "Tailwind CSS v4",
    active: false,
    id: 29,
  },
  {
    name: "Kysely",
    active: false,
    id: 30,
  },
  {
    name: "Tiptap",
    active: false,
    id: 31,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 9,
    name: "BClear",
    slug: "bclear",
    blurb: "Free website scorer that turns audits into leads",
    description:
      "BClear grades any website out of 100 in about 30 seconds, blending Google Lighthouse performance and SEO, a custom conversion-readiness analysis, and a visual presentation score. It turns a developer-only technical audit into plain-English advice a business owner can act on: visitors see their score and problems on screen, then hand over an email to unlock the step-by-step fix report, self-qualifying as warm leads for a done-for-you web service. Built with Next.js 16 and TypeScript, every external service sits behind a typed, swappable interface with in-memory fallbacks, so the whole flow runs keyless in dev and CI, and it is covered by 160+ automated tests.",
    role: "Full-stack Developer",
    stack: [
      { id: 3, name: "Nextjs" },
      { id: 2, name: "Typescript" },
      { id: 29, name: "Tailwind CSS v4" },
      { id: 26, name: "Turso" },
      { id: 27, name: "Upstash Redis" },
      { id: 28, name: "Resend" },
      { id: 24, name: "Vitest" },
      { id: 25, name: "Playwright" },
      { id: 1, name: "Reactjs" },
    ],
    tag: "",
    access: "Public",
    owner: "self",
    link: "https://bclear.tysonmonteiro.dev/",
    image: "/bclear.png",
  },
  {
    id: 10,
    name: "Tyson CV Builder",
    slug: "tyson-cv-builder",
    blurb: "CV builder with true-to-export live PDF preview",
    description:
      "Tyson CV Builder is a guided, section-based CV editor with a live preview that renders the actual PDF export (via @react-pdf/renderer, painted to canvas with pdf.js) rather than an HTML approximation. It ships 13 templates, 9 of them flagged ATS-safe, a transparent 0–100 CV score built from 16 weighted, convention-backed rules, and in-browser import from PDF, TXT or Markdown so files never touch the server. Accounts use Better Auth (Google OAuth and email/password), with opt-in private shareable links, a curated job-portals directory, and full English/Portuguese internationalization at 457 keys each. Built with Next.js 16 and React 19, including a custom Kysely dialect for libSQL and a security model where ownership always comes from the session, never the request.",
    role: "Full-stack Developer",
    stack: [
      { id: 3, name: "Nextjs" },
      { id: 2, name: "Typescript" },
      { id: 29, name: "Tailwind CSS v4" },
      { id: 23, name: "Better Auth" },
      { id: 26, name: "Turso" },
      { id: 30, name: "Kysely" },
      { id: 31, name: "Tiptap" },
      { id: 28, name: "Resend" },
      { id: 1, name: "Reactjs" },
    ],
    tag: "",
    access: "Public",
    owner: "self",
    link: "https://cvbuilder.tysonmonteiro.dev/",
    image: "/cvbuilder.png",
  },
  {
    id: 1,
    name: "Yenza Prep",
    slug: "yenza-prep",
    blurb: "Online learning platform for Grade 6 & 7 students",
    description:
      "Yenza Prep is an innovative online learning platform built for Grade 6 & 7 students. It combines interactive quizzes, assessments, and exercises with personalized learning paths tailored to each learner’s interests and strengths. Students also gain access to career insights to help guide their future choices.",
    role: "Frontend Developer",
    stack: [
      {
        id: 3,
        name: "Nextjs",
      },
      {
        id: 4,
        name: "Tailwind CSS",
      },
      {
        id: 6,
        name: "Mongodb",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 18,
        name: "Zustand",
      },
      {
        id: 5,
        name: "Nodejs",
      },
      {
        id: 1,
        name: "Reactjs",
      },
    ],
    tag: "",
    access: "Public for schools",
    link: "https://app.yenzaprep.com/en/auth/login",
    image: "/yenzaprep.png",
  },
  {
    id: 7,
    name: "Holiday Apartments",
    slug: "holiday-apartments",
    blurb: "Short-term rental booking platform",
    description:
      "Holiday Apartments is your go-to booking platform for delightful short-term rentals. Following the footsteps of Airbnb and Booking.com, they provide an array of listings across South Africa, ensuring you find the perfect accommodation for your stay.",
    role: "Frontend Developer",
    stack: [
      {
        id: 3,
        name: "Nextjs",
      },
      {
        id: 1,
        name: "Reactjs",
      },
      {
        id: 7,
        name: "MUI",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 10,
        name: "My SQL",
      },
      {
        id: 15,
        name: "Redux",
      },
    ],
    tag: "",
    access: "Public",
    link: "https://www.holidayapartments.co.za/",
    image: "/holidayapartments.png",
  },
  {
    id: 2,
    name: "PlaylistGenius",
    slug: "playlistgenius",
    blurb: "AI playlist generator for DJs & music lovers",
    description:
      "PlaylistGenius stands as the pioneering playlist generator, utilizing AI to craft personalized playlists tailored to the user's criteria. Perfect for DJs and music enthusiasts, it includes features like exporting to YouTube and Spotify, merging two or more playlists, and creating playlists based on mood, BPM, genre, and more.",
    role: "Full-stack Developer",
    stack: [
      {
        id: 3,
        name: "Nextjs",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 20,
        name: "Postgres",
      },
      {
        id: 19,
        name: "AI",
      },
      {
        id: 21,
        name: "Neon",
      },
      {
        id: 22,
        name: "Drizzle ORM",
      },
      {
        id: 23,
        name: "Better Auth",
      },
      {
        id: 4,
        name: "Tailwind CSS",
      },
      {
        id: 1,
        name: "Reactjs",
      },
    ],
    tag: "",
    access: "Public",
    owner: "self",
    link: "https://www.playlistgenius.app/",
    image: "/screenshot-playlistgenius-v2.png",
  },
  {
    id: 3,
    name: "Host Agents for Owners",
    slug: "host-agents-for-owners",
    blurb: "React Native app for property owners",
    description:
      "Host Agents for Owners is a React Native app designed for property owners to manage their properties with ease. This app is a testament to my expertise in React Native, showcasing my ability to create user-friendly interfaces and seamless functionality.",
    role: "Mobile Developer",
    stack: [
      {
        id: 12,
        name: "React Native",
      },
      {
        id: 13,
        name: "Expo Go",
      },
      {
        id: 14,
        name: "React Native Paper",
      },
    ],
    tag: "",
    access: "Private",
    link: "https://play.google.com/store/apps/details?id=com.virtual_designs.hostagentsforowners01",
    image: "/hosta_agents_for_owners.png",
  },
  {
    id: 4,
    name: "Host Agents for Property Hosts",
    slug: "host-agents-for-property-hosts",
    blurb: "Cross-platform property management app",
    description:
      "My inaugural venture into React Native, Host Agents for Managers, stands as a testament to my early expertise. Tailored primarily for company employees engaged in property management, this versatile app is accessible on both Android and iOS platforms. Seamless fusion of functionality and user-friendly design.",
    role: "Mobile Developer",
    stack: [
      {
        id: 12,
        name: "React Native",
      },
      {
        id: 13,
        name: "Expo Go",
      },
      {
        id: 14,
        name: "React Native Paper",
      },
    ],
    tag: "",
    access: "Private",
    link: "https://play.google.com/store/apps/details?id=com.virtual_designs.hostagentsforpropertyhosts01",
    image: "/hostagentsformanagers.png",
  },
  {
    id: 5,
    name: "ActivityHub",
    slug: "activityhub",
    blurb: "Curated tours & activities platform in Cape Town",
    description:
      "ActivityHub is your premier platform for curated tours and activities. Nestled in the heart of Cape Town, ActivityHub has been dedicated to providing clients with the finest vacation experiences and more. Explore the wonders of South Africa, where each activity is crafted to make your journey truly memorable.",
    role: "Frontend Developer",
    stack: [
      {
        id: 8,
        name: "Javascript",
      },
      {
        id: 9,
        name: "Jquery",
      },
      {
        id: 10,
        name: "My SQL",
      },
      {
        id: 11,
        name: "PHP",
      },
    ],
    tag: "",
    access: "Public",
    link: "https://activityhub.co.za/",
    image: "/activityhub.png",
  },
  {
    id: 6,
    name: "Host Agents Dashboard",
    slug: "host-agents-dashboard",
    blurb: "Legacy PHP backend rebuilt in modern React",
    description:
      "In response to the company's vision for an enhanced business system, I spearheaded the transformation of their antiquated PHP backend to a modern React.js version. This revamped system integrates with their existing PHP/Laravel API, facilitating secure and efficient data transfer.",
    role: "Frontend Developer",
    stack: [
      {
        id: 1,
        name: "Reactjs",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 11,
        name: "PHP",
      },
      {
        id: 10,
        name: "My SQL",
      },
      {
        id: 15,
        name: "Redux",
      },
    ],
    tag: "",
    access: "Private",
    link: "",
    image: "/hostagentsredbacked.png",
  },
  {
    id: 8,
    name: "GuideMe Tours",
    slug: "guideme-tours",
    blurb: "Luxury private tours platform (in progress)",
    description:
      "GuideMe Tours is a distinguished platform specializing in luxurious and private tours throughout Cape Town. Currently, I am fully engaged as a Fullstack developer, tasked with taking this project from inception to completion. Leveraging my expertise in UI/UX design and software engineering.",
    role: "Full-stack Developer",
    stack: [
      {
        id: 3,
        name: "Nextjs",
      },
      {
        id: 1,
        name: "Reactjs",
      },
      {
        id: 5,
        name: "Nodejs",
      },
      {
        id: 2,
        name: "Typescript",
      },
      {
        id: 6,
        name: "Mongodb",
      },
      {
        id: 15,
        name: "Redux",
      },
    ],
    tag: "Coming soon",
    access: "Public",
    link: "",
    image: "/guidemetours.png",
  },
];

export const SERVICES = [
  {
    title: "In-house software development",
    description:
      "Custom internal tools and business systems built around how your team actually works.",
    icon: <Building2 size={28} />,
  },
  {
    title: "Web app development",
    description:
      "Fast, scalable web applications with clean, maintainable code and great UX.",
    icon: <LayoutGrid size={28} />,
  },
  {
    title: "Mobile app development",
    description:
      "iOS and Android apps built from a single React Native codebase.",
    icon: <Smartphone size={28} />,
  },
  {
    title: "API & backend development",
    description:
      "Robust APIs and backend systems designed for reliability and scale.",
    icon: <Server size={28} />,
  },
  {
    title: "Website development",
    description:
      "Responsive, fast websites and landing pages that convert.",
    icon: <Globe size={28} />,
  },
  {
    title: "SEO",
    description:
      "Technical SEO and on page optimization to help your site rank and get found.",
    icon: <Search size={28} />,
  },
  {
    title: "WordPress optimization & maintenance",
    description:
      "Speed, security and ongoing upkeep for existing WordPress websites.",
    icon: <Wrench size={28} />,
  },
  {
    title: "Rescue & Repair",
    description:
      "Diagnose and fix bugs, breakages and performance issues on any existing web app or website.",
    icon: <LifeBuoy size={28} />,
  },
];

export const STACK = [
  {
    name: "TypeScript",
    description: "Typed JavaScript for safer, more maintainable code.",
  },
  {
    name: "React",
    description: "My core library for building interactive user interfaces.",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework for fast apps that rank well.",
  },
  {
    name: "React Native",
    description: "One codebase shipping to both iOS and Android.",
  },
  {
    name: "Node.js",
    description: "JavaScript on the server for APIs and backend services.",
  },
  {
    name: "PostgreSQL",
    description: "Reliable relational database for structured data.",
  },
  {
    name: "MongoDB",
    description: "Flexible document database for products that move fast.",
  },
  {
    name: "Tailwind CSS",
    description: "Utility first styling for consistent, responsive design.",
  },
  {
    name: "WordPress",
    description: "Building, optimizing and maintaining WordPress websites.",
  },
];
