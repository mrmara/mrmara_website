import React from "react";
import GithubRepos from "../hooks/useGithubApi.js";
import "./Projects.css";
import isDesktop from "../hooks/useMediaQuery.js";
const Projects = () => {
  return (
    <section className="projects-section">
      {isDesktop() ? (
        <div className="projects">
          <h2>My Projects</h2>
          <p>Here are some of the personal projects I have worked on:</p>
          <GithubRepos /> {/* Added GithubRepos component here */}
        </div>
      ) : (
        <div className="mobile-projects">
          <h2>My Projects</h2>
          <p>Here are some of the personal projects I have worked on:</p>
          <GithubRepos /> {/* Added GithubRepos component here */}
        </div>
      )}
    </section>
  );
};

export default Projects;
