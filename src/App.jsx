import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import projectsData from './projects-data';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='container'>
        <About />
        <Projects projectsData={projectsData} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
