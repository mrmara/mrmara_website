import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch, feel free to reach out through my social media profiles:</p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
            </ul>
            <p>You can also download my CV:</p>
            <a href="/cv.pdf" download>Download CV</a>
        </div>
    );
};

export default Contact;