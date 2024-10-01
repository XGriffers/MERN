import React, { useState} from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Your Name" className="logo-img" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link" onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" className="nav-link" onClick={toggleMenu}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          </li>

        </ul>  
      </div>
    </nav>
  );
};

export default Navigation;