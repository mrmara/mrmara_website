import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "mrmara";

function GithubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

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
}

export default GithubRepos;