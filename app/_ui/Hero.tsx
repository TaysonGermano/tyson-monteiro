import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row py-7 sm:justify-between items-center">
      <div className="hero-content sm:w-[600px] text-center sm:text-left">
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 mb-2">
          Tyson Monteiro - Full Stack JavaScript Developer
        </p>
        <h1 className="text-[1.75rem] font-extrabold  text-slate-900 dark:text-white md:text-4xl">
          Hey there! I&apos;m Tyson Monteiro, a Full Stack Typescript developer
          with a laser focus on React.js and its vibrant ecosystem.
        </h1>
        <Link
          href="/Tyson_Monteiro_CV.pdf"
          download="Tyson_Monteiro_CV.pdf"
          target="_blank"
          className="sm:hidden inline-block mt-3 px-4 py-2 bg-indigo-500 select-none text-white text-sm shadow-md rounded-md uppercase hover:text-white"
        >
          Download CV
        </Link>
      </div>
      <div className="profile">
        <div className="avatar w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-gray-100 relative">
          <Image
            src="/tysonmonteiro.jpg"
            alt="profile"
            className="rounded-full object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
}
