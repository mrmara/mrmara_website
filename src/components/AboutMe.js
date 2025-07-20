import React from "react";
import "./AboutMe.css";
//import photoFun1 from "../assets/photo_fun1.jpeg";
import photoFun2 from "../assets/photo_fun2.jpeg";
import isDesktop from "../hooks/useMediaQuery"; // Import the custom hook
import Typewriter from "../hooks/useTypeWriter"; // Import the Typewriter component

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me-container">
        <div className="about-me-image">
          <img src={photoFun2} alt="Antonio Marangi" />
        </div>
        <div className="about-me-content">
          <h1>About Me</h1>
          <p>
            <Typewriter
              text="I'm a Robotics Engineer with a focus on ROS2 and autonomous vehicles.
                    I'm really passionate about robots, IoT, and DIY projects.
                    I also love programming and have experience developing software for both robotics and IoT devices.
                    I'm always on the lookout for new things to build and experiment with.
                    With a solid background in robotics, I've worked on a variety of projects
                    involving the design and implementation of robotic systems.
                    Right now, I'm working at Alba-Robot, a company that specializes in autonomous vehicles,
                    where I'm part of the development team.
                    In my free time, I'm building a personal project: an open-source, modular smart home assistant."
              speed={60}
              increase={1.5}
              buzzwords={[
                "ROS2",
                "Autonomous Vehicles",
                "IoT",
                "DIY",
                "open source",
                "smart home assistant",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
