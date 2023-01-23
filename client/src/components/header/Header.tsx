import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav__header">
        <span className="nav__title">
          Blog<span className="main">Typescript</span>
        </span>
        <button className="nav__login">Login</button>
      </div>
      <div className="nav__presentation">
        <h2 className="nav__presentation__title">Typescript Blog</h2>
        <h4 className="nav__presentation__subtitle">
          El mejor blog de habla hispana
        </h4>
      </div>
    </div>
  );
};

export default Header;
