import { useEffect, useRef, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';

const printScreens = (screens) =>
  screens.map((screen, index) => (
    <SkeletonLoader
      key={index}
      src={`/projects/${screen}.png`}
      alt={screen}
      width='var(--width)'
      aspectRatio='2 / 1'
      insertClass={`project__screen project__screen-${index + 1}`}
    />
  ));

const Project = ({ single, title, group_title, desc, group_desc, screens, page, github }) => {
  const [showProjects, setShowProjects] = useState(false);
  const collapse = useRef();

  useEffect(() => {
    let resizeTimeout = null;

    const watchWindowResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        if (showProjects) {
          setShowProjects(false);

          setTimeout(() => {
            setShowProjects(true);
          }, 400);
        }
      }, 150);
    };

    window.addEventListener('resize', watchWindowResize);

    return () => {
      window.removeEventListener('resize', watchWindowResize);
    };
  }, []);

  if (single) {
    return (
      <article className='project'>
        <div className='project__screens'>{printScreens(screens)}</div>

        <div className='project-content'>
          <h4 className='project__title'>{title}</h4>
          <p className='project__desc'>{desc}</p>

          <div className='project__links'>
            <a href={page} target='_blank' title='Page link' className='btn'>
              <i className='fa-solid fa-globe' />
            </a>
            <a href={github} target='_blank' title='GitHub link' className='btn'>
              <i className='fa-brands fa-github' />
            </a>
          </div>
        </div>
      </article>
    );
  } else {
    return (
      <article className='projects-group'>
        <div className='projects-group__container'>
          <h4 className='projects-group__title'>{group_title}</h4>
          <p className='projects-group__desc'>{group_desc}</p>
          <button
            className={`projects-group__show ${showProjects ? 'projects-group__show--active' : ''} btn btn--icon`}
            onClick={() => setShowProjects((prev) => !prev)}
          >
            {showProjects ? 'Hide projects' : 'Show projects'}
            {showProjects ? <i className='fa-solid fa-eye-slash' /> : <i className='fa-solid fa-eye' />}
          </button>
        </div>

        <section
          className={`projects-group__collapse ${showProjects ? 'projects-group__collapse--visible' : ''}`}
          style={showProjects ? { height: `${collapse.current.scrollHeight}px` } : { height: '0' }}
          ref={collapse}
        >
          {title.map((title, index) => {
            return (
              <article key={index} className='project-group'>
                <div className='project__screens'>{printScreens(screens[index])}</div>
                <div className='project-content'>
                  <h4 className='project__title'>{title}</h4>
                  <p className='project__desc'>{desc[index]}</p>

                  <div className='project__links'>
                    <a href={page[index]} target='_blank' title='Page link' className='btn'>
                      <i className='fa-solid fa-globe' />
                    </a>
                    <a href={github[index]} target='_blank' title='GitHub link' className='btn'>
                      <i className='fa-brands fa-github' />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </article>
    );
  }
};

export default Project;
