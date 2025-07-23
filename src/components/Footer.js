// src/components/Footer.tsx
import React from "react";
import "./Footer.css";
import { ToogleSoundButton } from "../hooks/useToogleSound";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>
          &copy; {new Date().getFullYear()} Antonio Marangi. All rights
          reserved.
        </p>
      </div>
      <div>
        <p>
          <a
            href="https://www.linkedin.com/in/antonio-marangi/?originalSubdomain=it"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/mrmara"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
        </p>
      </div>
      <div className="App">
        <ToogleSoundButton />
      </div>
    </footer>
  );
};

export default Footer;
