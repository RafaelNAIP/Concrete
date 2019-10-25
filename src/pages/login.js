import React, { useState } from "react";

import "./Login.css";
import searchIcon from "../assets/searchIcon/SearchIcon.png";

import axios from "axios";

// import { Container } from './styles';

export default function Login({ history }) {
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
    <div className="total-container">
      <div className="login-inputNName">
        <div className="names-login">
          <a className="git-name">Github</a>
          <a className="search-name">Search</a>
        </div>
        <form className="lgnNBtn-login">
          <input value={username} onChange={e => setUsername(e.target.value)} />
          <button onClick={e => handleLogin(e)} type="submit">
            <img src={searchIcon} />
          </button>
        </form>
      </div>
    </div>
  );
}
