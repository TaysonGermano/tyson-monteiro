import React from "react";

type Props = {
  active: boolean;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Chip(props: Props) {
  return (
    <button
      className={`accent-border py-1 px-4 text-sm rounded-full border select-none transition-colors ${
        props.active
          ? "accent-bg"
          : "accent-text bg-transparent"
      }`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
