import InfoCard from "@/components/InfoCard";

export default function Skills() {
  return (
    <div className="mt-5 py-[80px]" id="skills">
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
          description="My tech toolkit includes strong proficiency in <strong>JavaScript</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>Expo Go</strong>, <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Nextjs</strong>, <strong>Tailwind</strong>, <strong>TypeScript</strong>, <strong>Express</strong>, <strong>Lit Web Components</strong>, <strong>Storybook</strong>, <strong>Docker</strong> and more. I thrive in a variety of development environments, whether it's building the frontend magic with <strong>React</strong>, diving into backend intricacies with <strong>Node.js</strong> and <strong>MongoDB</strong> or building a fullstack application with <strong>Nextjs</strong>."
        />
        <InfoCard
          title="Why I code"
          description="My driving force is a desire to create projects that have a meaningful impact on people's day-to-day activities. I firmly believe that technology should simplify and improve our lives. That's why I'm passionate about leveraging my expertise to develop solutions that make a real difference."
        />
      </div>
    </div>
  );
}
