import React from 'react';

const Projects = () => {
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <p>Here are some of the personal projects I have worked on:</p>
            <ul>
                <li>
                    <h3>Autonomous Vehicle Navigation</h3>
                    <p>Developed a navigation system using ROS2 for an autonomous vehicle, focusing on obstacle detection and path planning.</p>
                </li>
                <li>
                    <h3>IoT Smart Home System</h3>
                    <p>Created a smart home system that integrates various IoT devices, allowing for remote monitoring and control via a mobile app.</p>
                </li>
                <li>
                    <h3>Robotics Simulation Environment</h3>
                    <p>Built a simulation environment for testing robotic algorithms in Gazebo, facilitating the development of robust control systems.</p>
                </li>
            </ul>
            <p>More projects and articles will be added in the future!</p>
        </div>
    );
};

export default Projects;