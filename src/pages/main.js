import React, { useEffect, useState } from "react";

import axios from "axios";

import searchIcon from "../assets/searchIcon/SearchIcon.png";
import starIcon from "../assets/starIcon/starIcon.png";
import repositorieIcon from "../assets/repositorieIcon/repositorieIcon.png";
import organizationIcon from "../assets/organizationIcon/organizationIcon.png";
import locationIcon from "../assets/locationIcon/locationIcon.png";
import followersIcon from "../assets/followersIcon/followersIcon.png";

import "./Main.css";

// import { Container } from './styles';

export default function Main({ match, history }) {
  const [data, setData] = useState("");
  const [repos, setRepos] = useState([]);
  const [userExist, setUserExist] = useState("");
  const [username, setUsername] = useState("");
  var totalStar = 0;

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response);

      history.push(`/Main/${username}`);
    } catch (err) {
      history.push("/NotFound");
    }
  }

  for (let i = 0; i < repos.length; i++) {
    totalStar += repos[i].stargazers_count;
  }

  useEffect(() => {
    setUserExist(match.params.id);
    console.log(match.params.id);
    async function loadUsers() {
      const response = await axios.get(
        `https://api.github.com/users/${match.params.id}`
      );
      const repo = await axios.get(
        `https://api.github.com/users/${match.params.id}/repos`
      );
      console.log(response.data);
      console.log(repo.data);
      setData(response.data);
      setRepos(repo.data);
    }

    loadUsers();
  }, [match.params.id, totalStar]);

  return (
    <>
      <div className="total-container-main">
        <div className="top-bar">
          <div className="names-main">
            <div>
              <a className="git-name-main">Github</a>
              <a className="search-name-main">Search</a>
            </div>
            <div className="lgnNBtn-main">
              <input
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <button type="submit" onClick={e => handleLogin(e)}>
                <img src={searchIcon} />
              </button>
            </div>
          </div>
        </div>
        <div className="repo-informations">
          <div className="left-side-main">
            <div className="avatarNName">
              <img src={data.avatar_url} />
              <a className="name">{data.name}</a>
              <a className="user">{data.login}</a>
            </div>
            <div className="main-informations">
              <div className="information">
                <img src={organizationIcon} />
                <a>{data.company}</a>
              </div>
              <div className="information">
                <img src={locationIcon} />
                <a>{data.location}</a>
              </div>
              <div className="information">
                <img src={starIcon} />
                <a>{totalStar}</a>
              </div>
              <div className="information">
                <img src={repositorieIcon} />
                <a>{data.public_repos}</a>
              </div>
              <div className="information">
                <img src={followersIcon} />
                <a>{data.followers}</a>
              </div>
            </div>
          </div>
          <div className="right-side-main">
            {repos.map(repo => (
              <>
                <a key={repo.id} className="repo-name">
                  {repo.name}
                </a>
                <a className="repo-description">{repo.description}</a>
                <div className="stars-repo">
                  <img src={starIcon} />
                  <a>{repo.stargazers_count}</a>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      {userExist === "??" && (
        <div>
          <a>nao existe =(</a>
        </div>
      )}
    </>
  );
}
