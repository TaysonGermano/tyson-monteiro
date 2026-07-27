export type Stack = {
  id: number;
  name: string;
};

export type Project = {
  id: number;
  slug: string;
  blurb: string;
  tag: string;
  name: string;
  description: string;
  role: string;
  stack: Stack[];
  access: string;
  link: string;
  image: string;
};
