import Image from "next/image";
import Link from "next/link";

const CV_URL = "https://rxresu.me/taysongermano/fullstack-developer";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8 py-10">
      <div className="max-w-xl text-center sm:text-left">
        <p className="text-sm mb-3 text-black/60 dark:text-white/60">
          Tyson Monteiro, Fullstack Developer
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Hey there! I&apos;m Tyson Monteiro, a fullstack developer who builds
          scalable web and mobile applications using TypeScript, React and
          Node.js.
        </h1>
        <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-5">
          <Link
            href="/work-with-me"
            className="no-underline rounded-md bg-black px-5 py-2.5 text-sm text-white dark:bg-white dark:text-black"
          >
            Work with me
          </Link>
          <Link href={CV_URL} target="_blank" className="text-sm">
            Download CV
          </Link>
        </div>
      </div>

      <div className="mx-auto sm:mx-0 shrink-0">
        <div className="relative h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] overflow-hidden rounded-2xl">
          <Image
            src="/tysonmonteiro.jpg"
            alt="Tyson Monteiro"
            fill
            priority
            className="object-cover grayscale"
          />
        </div>
      </div>
    </section>
  );
}
