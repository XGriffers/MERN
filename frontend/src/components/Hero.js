// src/components/Hero.js
import React from 'react';
import './Hero.css';
import profile from '../assets/profile.JPEG';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Steve Griffith</h1>
        <h2>Web Developer & Designer</h2>
        <p>Creating beautiful and functional web experiences</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
      <div className="hero-image">
        <img 
          src={profile}
          alt="Your Name" 
        />
      </div>
    </section>
  );
};

export default Hero;