import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import projectsData from './projects-data';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkTheme);
  }, [darkTheme]);

  const toggleTheme = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  return (
    <>
      <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme} />
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
