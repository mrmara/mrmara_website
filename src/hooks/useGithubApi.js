import React, { useEffect, useState } from "react";
import "./useGithubApi.css";
import IsDesktop from "./useMediaQuery";

const GITHUB_USERNAME = "mrmara";

function GithubRepos() {
  const [repos, setRepos] = useState([]);
  const isDesktop = IsDesktop();

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  if (isDesktop) {
    return (
      <div className="github-repos">
        <div className="repo-list">
          {repos.filter(repo => !repo.fork).slice(0, 6).map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card"
            >
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <span>★ {repo.stargazers_count}</span>
            </a>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mobile-github-repos">
        <div className="mobile-repo-list">
          {repos.filter(repo => !repo.fork).slice(0, 6).map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-repo-card"
            >
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <span>★ {repo.stargazers_count}</span>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default GithubRepos;