import { useState } from 'react';

import { ProjectType } from '../types/projectType';

import TechIcons from './StackIcons';

const Project = ({ project }: { project: ProjectType }) => {
  const [mainPreview, secondPreview] = project.preview;
  const [preview, setPreview] = useState<string>(mainPreview);

  const switchPreview = () => secondPreview && setPreview(secondPreview);
  const switchBack = () => setPreview(mainPreview);

  return (
    <article className='project'>
      <span className='project__badge'>{project.badge}</span>
      <h3 className='project__name'>{project.name}</h3>
      <p className='project__desc'>{project.desc}</p>
      <div className='project__stack'>
        {project.techStack.map((icon, index) => (
          <TechIcons icon={icon} key={index} />
        ))}
      </div>

      <div className='project__links'>
        <a href={project.page} className='project__links__btn | btn' target='_blank'>
          <i className='fa-solid fa-play fa-fw' />
        </a>
        <a href={project.github} className='project__links__btn | btn' target='_blank'>
          <i className='fa-brands fa-github fa-fw' />
        </a>
      </div>

      <div className='project__preview'>
        <img
          src={`./projects/${preview}`}
          alt={project.name}
          className='project__preview__img'
          // onMouseEnter={switchPreview}
          // onMouseLeave={switchBack}
        />
        <span className='project__preview__drop' />
      </div>
    </article>
  );
};

export default Project;
