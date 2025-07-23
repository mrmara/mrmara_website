import React from 'react';
import GithubRepos from "../hooks/useGithubApi.js";
import "./Projects.css";

const Projects = () => {
    return (
        <div className="projects">
            <h2>My Projects</h2>
            <p>Here are some of the personal projects I have worked on:</p>
            <GithubRepos /> {/* Added GithubRepos component here */}
            
        </div>
    );
};

export default Projects;