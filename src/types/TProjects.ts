import { ProjectType } from './components/TProject';

export type ProjectsProps = {
  content: {
    intro: {
      title: string;
      text: string;
    };
    numberOfFeatured: number;
    projects: ProjectType[];
  };
};
