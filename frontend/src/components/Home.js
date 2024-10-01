import React from 'react';
import Hero from './Hero';
import ProjectsCarousel from './ProjectsCarousel';
import ContactForm from './ContactForm';


const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ProjectsCarousel />
      <ContactForm />
    </div>
  );
};

export default Home;