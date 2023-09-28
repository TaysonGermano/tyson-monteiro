import React from "react";

type Props = {
  title: string;
  description: string;
  htlm?: boolean;
  className?: string;
};

export default function InfoCard(props: Props) {
  return (
    <div
      className={`${props.className} sm:w-[600px] rounded-md transition-all border-2 p-5 select-none dark:border-slate-800`}
    >
      <div className="title">
        <h2 className="text-xl font-bold">{props.title}</h2>
      </div>
      {props.htlm ? (
        <p
          className="text-slate-500 dark:text-slate-400 mt-3"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></p>
      ) : (
        <p className="text-slate-500 dark:text-slate-400 mt-3">
          {props.description}
        </p>
      )}
    </div>
  );
}
