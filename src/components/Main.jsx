import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Main = ({ projectsData }) => {
  return (
    <main className='container'>
      <About />
      <Projects projectsData={projectsData} />
      <Contact />
    </main>
  );
};

export default Main;
