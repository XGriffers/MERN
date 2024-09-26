import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectsCarousel from './components/ProjectsCarousel';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DataCollectionPopup from './components/DataCollectionPopup';

function App() {
  return (
    <div className="App">
      <Helmet />
      <Navigation />
      <Hero />
      <ProjectsCarousel />
      <Skills />
      <ContactForm />
      <Footer />
      <DataCollectionPopup />
    </div>
  );
}

export default App;