import React from 'react';
import './Contact.css'; // Assuming you have a CSS file for styling
const Contact = () => {

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch you can email me at:</p>
            <a href="mailto:antonio.marangi@mrmara.it">antonio.marangi@mrmara.it</a>
            <p>You can also download my CV:</p>
            <a href="cv.pdf" download>Download CV</a>
        </div>
    );
};

export default Contact;