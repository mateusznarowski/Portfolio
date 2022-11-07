import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Main = ({ projectsData, contactData }) => {
  return (
    <main className='container'>
      <About contactData={contactData} />
      <Projects projectsData={projectsData} />
      <Contact contactData={contactData} />
    </main>
  );
};

export default Main;
