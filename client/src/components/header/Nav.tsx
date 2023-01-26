import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__header">
        <Link to="/" className="nav__link">
          <span className="nav__title">
            Blog<span className="main">Typescript</span>
          </span>
        </Link>
        <Link to="/auth/login" className="nav__link">
          <button className="nav__login">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
