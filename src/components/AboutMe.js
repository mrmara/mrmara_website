import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me-container">
                <div className="about-me-image">
                    <img src="https://picsum.photos/600" alt="Antonio Marangi"/>
                </div>
                <div className="about-me-content">
                    <h1>About Me</h1>
                    <p>
                        I am a Robotics Engineer specializing in ROS2 and autonomous vehicles. 
                        My passion lies in the intersection of IoT and robotics, where I strive to 
                        create innovative solutions that enhance automation and connectivity.
                    </p>
                    <p>
                        With a strong background in robotics, I have worked on various projects 
                        that involve designing and implementing robotic systems. I am always eager 
                        to learn and explore new technologies that can push the boundaries of what 
                        is possible in the field of robotics.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;