import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectsCarousel from './components/ProjectsCarousel';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Title from './components/Title';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          window.history.pushState({}, '', `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <Title />
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <ProjectsCarousel />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;