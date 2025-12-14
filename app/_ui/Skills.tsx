import InfoCard from "@/components/InfoCard";

export default function Skills() {
  return (
    <div id="skills">
      <h2 className="text-2xl font-bold">More About Me</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 ">
        I&apos;m a highly skilled and results-driven Full-Stack Developer with a
        passion for crafting innovative solutions that enhance the daily lives
        of individuals
      </p>
      <div className="mt-4 flex flex-col items-center sm:items-stretch sm:flex-row gap-4">
        <InfoCard
          title="Skills"
          htlm
          className="shadow-md dark:shadow-indigo-700"
          description="My tech toolkit includes strong proficiency in <strong>Typescript</strong>, <strong>React.js</strong> <strong>Tailwindcss</strong>, <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>Jest</strong>, <strong>Playwright</strong>, <strong>CI/CD</strong>, <strong>Docker</strong>, and more. I’m comfortable across the full development lifecycle—crafting intuitive frontends with React, building robust backends with Node.js and MongoDB or PostgreSQL, and delivering end-to-end full-stack solutions with Next.js."
        />
        <InfoCard
          title="Why I code"
          description="My driving force is a desire to create projects that have a meaningful impact on people's day-to-day activities. I firmly believe that technology should simplify and improve our lives. That's why I'm passionate about leveraging my expertise to develop solutions that make a real difference."
        />
      </div>
    </div>
  );
}
