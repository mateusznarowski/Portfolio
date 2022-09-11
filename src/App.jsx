import { useEffect, useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import projectsData from './data/projects-data';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(() => JSON.parse(localStorage.getItem('darkTheme')) || false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkTheme);

    localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  const toggleTheme = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  return (
    <>
      <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <Main projectsData={projectsData} />
      <Footer />
    </>
  );
};

export default App;
