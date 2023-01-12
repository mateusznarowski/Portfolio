import { useState } from 'react';
import Collapsible from '../components/Collapsible';
import Project from '../components/Project';
import { ProjectType } from '../types/projectType';

type ProjectsProps = {
  content: {
    intro: {
      title: string;
      text: string;
    };
    projects: ProjectType[];
  };
  numberOfFeatured?: number;
};

const renderProjects = (array: ProjectType[]) => {
  return array.map((project, index) => <Project project={project} key={index} />);
};

const Projects = ({ content, numberOfFeatured = 3 }: ProjectsProps) => {
  const { intro, projects } = content;

  const [featuredProjects, restOfProjects] = [projects.slice(0, numberOfFeatured), projects.slice(numberOfFeatured)];

  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <section id='projects'>
      <div className='container'>
        <div className='projects'>
          <div className='projects__intro'>
            <h2 className='projects__intro__title'>{intro.title}</h2>
            <p className='projects__intro__text'>{intro.text}</p>
            <svg viewBox='0 0 318 581' className='projects__intro__prop'>
              <path d='M 13.0268,0.01664033 C 65.7316,6.5636403 115.49,28.49664 155.428,63.52364 c 40.593,35.355 69.073,83.804 81.512,135.854 11.458,48.122 12.113,106.719 -17.677,148.949 -14.404,20.296 -35.027,35.027 -59.252,41.247 -23.242,5.892 -48.449,4.583 -71.0369,-3.601 -47.4671,-17.35 -78.8936,-63.508 -86.75017,-112.284 -3.92831,-24.879 -3.60095,-52.05 8.83867,-74.638 13.4217,-24.552 40.5925,-35.027 66.4539,-40.265 48.7765,-9.821 101.1535,-0.655 144.0375,24.552 43.539,25.534 74.638,67.763 88.387,116.212 13.422,47.795 9.494,99.517 -13.094,143.711 -21.606,42.5566 -59.252,76.6019 -103.118,95.2614 -10.476,4.583 -21.606,7.8565 -32.736,10.4754 -10.148,2.2915 -14.731,-13.4217 -4.256,-15.7132 42.557,-9.166 81.185,-34.3727 107.702,-68.7456 27.498,-35.682 40.265,-79.875 36.336,-124.724 -3.601,-44.848 -23.897,-88.387 -56.96,-119.158 -33.063,-30.772 -78.239,-48.122 -123.414,-49.104 -22.5882,-0.327 -46.4854,2.946 -67.1091,11.785 -10.8028,4.91 -20.6236,11.785 -26.8434,21.933 -5.5651,9.493 -8.5113,20.296 -9.4934,31.426 -3.9283,44.194 14.7311,92.643 50.4133,119.486 34.0456,25.534 84.7856,29.135 119.4856,2.947 37.319,-28.153 43.867,-81.513 39.284,-124.724 -4.911,-49.104 -25.534,-96.899 -57.616,-134.217 -31.753,-36.992 -74.6375,-63.835 -121.7772,-76.93 -11.1302,-2.946 -22.5878,-5.565 -34.0454,-6.874 -4.25565,-0.655 -8.18395,-3.274 -8.18395,-8.1839997 0.32735,-3.929 4.25566,-8.51199997 8.51135,-8.18399997 z' />
              <path d='m 181.944,578.78722 c -7.529,-4.58303 -15.059,-9.49338 -21.933,-14.40378 -3.928,-2.6189 -7.529,-5.5651 -11.13,-8.5114 -3.601,-2.6188 -6.875,-5.5651 -8.512,-9.8207 -3.928,-9.8208 5.566,-18.6595 11.131,-25.8614 5.565,-7.2019 11.457,-13.7491 17.677,-20.2963 7.529,-7.5292 18.987,3.9283 11.458,11.4576 -5.238,5.2377 -10.149,10.8028 -14.732,16.3679 -2.291,2.6189 -4.255,5.5651 -6.547,8.184 -0.982,1.3095 -2.291,2.9463 -3.273,4.2557 -0.328,0.3274 -0.655,0.9821 -0.982,1.3095 0,-0.3274 0,-0.6548 0.327,-0.9822 0,-0.6547 -0.327,-0.9821 -0.327,-1.6368 0.327,0.6547 0.654,0.9821 0.327,0.6548 4.91,3.2736 10.475,8.184 15.713,12.1123 6.22,4.2557 12.44,8.5113 18.987,12.4396 8.839,6.21984 0.655,20.29628 -8.184,14.73118 z' />
            </svg>
          </div>

          <section className='projects-container'>
            <div className='projects__featured'>{renderProjects(featuredProjects)}</div>

            {restOfProjects.length > 0 && (
              <>
                <button className='projects__btn | btn btn--cta btn--icon' onClick={() => setIsShown((prev) => !prev)}>
                  {isShown ? 'Collapse Projects' : 'See All Projects'}
                  <i className={`fa-solid fa-circle-chevron-${isShown ? 'up' : 'down'}`} />
                </button>

                <Collapsible isActive={isShown} setIsActive={setIsShown} className='projects__rest'>
                  {renderProjects(restOfProjects)}
                </Collapsible>
              </>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Projects;
