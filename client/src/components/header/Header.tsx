import React from "react";
import "./header.scss";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="navbar">
      <Nav />
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
