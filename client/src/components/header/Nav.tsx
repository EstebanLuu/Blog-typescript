import React from "react";
import "./Header.scss";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__header">
        <span className="nav__title">
          Blog<span className="main">Typescript</span>
        </span>
        <button className="nav__login">Login</button>
      </div>
    </div>
  );
};

export default Nav;
