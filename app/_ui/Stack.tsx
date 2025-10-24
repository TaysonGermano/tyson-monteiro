import Docker from "@/components/logos/Docker";
import Expressjs from "@/components/logos/Exp";
import { Git } from "@/components/logos/Git";
import Hono from "@/components/logos/Hono";
import MongoDB from "@/components/logos/MongoDb";
import Nextjs from "@/components/logos/Nextjs";
import Nodejs from "@/components/logos/Node";
import { PostgreSQL } from "@/components/logos/Postgres";
import Reactjs from "@/components/logos/Reactjs";
import TailwindCSS from "@/components/logos/Tailwindcss";
import TypeScript from "@/components/logos/Typescript";
import { Vite } from "@/components/logos/Vite";
import React from "react";

const stackList = {
  typescript: <TypeScript />,
  react: <Reactjs />,
  nextjs: <Nextjs />,
  tailwindcss: <TailwindCSS />,
  nodejs: <Nodejs />,
  hono: <Hono />,
  mongodb: <MongoDB />,
  express: <Expressjs />,
  docker: <Docker />,
  postgres: <PostgreSQL />,
  vite: <Vite />,
  git: <Git />,
};

export default function Stack() {
  return (
    <div className="mt-5 pt-[80px]" id="stack">
      <h2 className="text-2xl font-bold">My Stack</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 ">
        I specialize in building web applications using a robust stack of
        technologies:
      </p>

      <div className="mt-4 flex flex-wrap gap-6">
        {Object.entries(stackList).map(([name, component]) => (
          <div
            key={name}
            className="w-20 h-20 flex items-center justify-center"
          >
            {React.cloneElement(component, { className: "w-16 h-16" })}
          </div>
        ))}
      </div>
    </div>
  );
}
