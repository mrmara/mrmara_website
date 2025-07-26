import React from "react";
import "./Contact.css"; // Assuming you have a CSS file for styling
import isDesktop from "../hooks/useMediaQuery"; // Import the custom hook
const Contact = () => {
  return (
    <section className="projects-section">
      {isDesktop() ? (
        <div className="contact">
          <h2>Contact Me</h2>
          <p>If you would like to get in touch you can email me at:</p>
          <a href="mailto:antonio.marangi@mrmara.it">
            antonio.marangi@mrmara.it
          </a>
          <p>You can also download my CV:</p>
          <a href="cv.pdf" download>
            Download CV
          </a>
        </div>
      ) : (
        <div className="mobile-contact">
          <h2>Contact Me</h2>
          <p>If you would like to get in touch you can email me at:</p>
          <a href="mailto:antonio.marangi@mrmara.it">
            antonio.marangi@mrmara.it
          </a>
          <p>You can also download my CV:</p>
          <a href="cv.pdf" download>
            Download CV
          </a>
        </div>
      )}
    </section>
  );
};

export default Contact;
