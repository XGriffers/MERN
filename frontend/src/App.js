import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectsCarousel from './components/ProjectsCarousel';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Title from './components/Title';

function App() {
  
  return (
    <div className="App">
      <Title />

      <Navigation />

      <Hero />
      <ProjectsCarousel />
      <Skills />
      <ContactForm />
      <Footer />
      
    </div>
  );
}

export default App;