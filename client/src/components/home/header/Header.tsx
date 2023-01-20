import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="navbar">
      Header
      <Link to={"/"}></Link>
    </div>
  );
};

export default header;
