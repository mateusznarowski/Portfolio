export type ContactProps = {
  content: {
    intro: {
      title: string;
      formText: string;
      emailText: string;
      linksText: string;
    };
    contact: {
      email: string;
      form: string;
      github: string;
      linkedin: string;
      cv: {
        polish: string;
        english: string;
      };
    };
  };
};
