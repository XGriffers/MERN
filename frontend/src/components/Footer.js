// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Steve Griffith. All rights reserved.</p>
        <div className="social-links">
        <a href="https://www.linkedin.com/in/steve-griffith-228450192" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/XGriffers" target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;