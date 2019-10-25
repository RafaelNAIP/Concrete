import React, { useState } from "react";

import axios from "axios";

import "./notFound.css";

// import { Container } from './styles';

import searchIcon from "../assets/searchIcon/SearchIcon.png";

export default function NotFoud({ history }) {
  const [username, setUsername] = useState("");

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
  return (
    <div className="total-container-not-found">
      <div className="top-bar-not-found">
        <div className="names-not-found">
          <div>
            <a className="git-name-not-found">Github</a>
            <a className="search-name-not-found">Search</a>
          </div>
          <div className="lgnNBtn-not-found">
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
      <div>
        <a className="not-found-text">User not found :(</a>
      </div>
    </div>
  );
}
