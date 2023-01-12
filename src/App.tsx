import Header from './layout/Header';
import Hero from './layout/Hero';
import About from './layout/About';
import Projects from './layout/Projects';
import Contact from './layout/Contact';
import Footer from './layout/Footer';

import contact from './data/contact.json';
import heroContent from './data/hero.json';
import aboutContent from './data/about.json';
import projectsData from './data/projects.json';

const App = () => (
  <>
    <Header />
    <main>
      <Hero content={heroContent} cv={contact.contact.cv} />
      <About content={aboutContent} />
      <Projects content={projectsData} />
      <Contact content={contact} />
    </main>
    <Footer />
  </>
);

export default App;
