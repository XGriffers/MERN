// src/components/Navigation.js
import React, { useState } from 'react';
import './Navigation.css';
import logo from '../assets/Color logo.svg';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <a href="#home" className="navbar-logo">
          <img src={logo} alt="Your Name" className="logo-img" />
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;