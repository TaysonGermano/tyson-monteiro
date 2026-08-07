import Hero from "./_ui/Hero";
import FreeTools from "./_ui/FreeTools";
import Projects from "./_ui/Projects";
import Services from "./_ui/Services";
import Stack from "./_ui/Stack";
import AiWorkflow from "./_ui/AiWorkflow";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-10">
      <Hero />
      <FreeTools />
      <Projects />
      <Services />
      <Stack />
      <AiWorkflow />
    </div>
  );
}
