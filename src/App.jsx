import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#prosjekter">
        Hopp til hovedinnhold
      </a>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

