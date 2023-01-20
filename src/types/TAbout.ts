export type AboutProps = {
  content: {
    techStack: {
      icon: string;
      title: string;
      stack: string[];
    };
    certificates: {
      icon: string;
      title: string;
      links: { name: string; url: string }[];
    };
    other: {
      icon: string;
      title: string;
      text: string[];
      stack: string[];
    };
  };
};
