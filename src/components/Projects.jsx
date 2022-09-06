import { useState } from 'react';

import Project from './Project';

const DisplayProjects = ({ projectsData }) => {
  const [projects, setProjects] = useState(projectsData);

  const projectsElements = projects.map((project) => <Project key={project.id} {...project} />);

  return (
    <section id='projects' className='section projects'>
      <h1 className='section__title'>Projects</h1>
      <section className='projects__elements'>{projectsElements}</section>
    </section>
  );
};

export default DisplayProjects;
