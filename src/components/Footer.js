// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Antonio Marangi. All rights reserved.</p>
      <p>
        <a href="https://www.linkedin.com/in/antonio-marangi/?originalSubdomain=it" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
        <a href="https://github.com/mrmara" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>
    </footer>
  );
};

export default Footer;
