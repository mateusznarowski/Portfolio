export type ProjectType = {
  badge: string;
  name: string;
  desc: string;
  techStack: string[];
  page: string;
  github: string;
  preview: string[];
};

export type ProjectProps = {
  project: ProjectType;
};
