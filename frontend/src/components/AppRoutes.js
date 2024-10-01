import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectsCarousel from './ProjectsCarousel';
import Skills from './Skills';
import ContactForm from './ContactForm';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsCarousel />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  );
};

export default AppRoutes;