import React, { useState } from "react";
import "./Layout.scss";

const Layout = () => {
  const [category, setCategory] = useState<number>(1);

  const handleChange = (n: number) => {
    setCategory(n);
  };

  return (
    <div className="layout__container">
      <div className="layout__categories">
        <span
          className={`${
            category === 1 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(1)}
        >
          Todas
        </span>
        <span
          className={`${
            category === 2 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(2)}
        >
          Politica
        </span>
        <span
          className={`${
            category === 3 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(3)}
        >
          Economia
        </span>
        <span
          className={`${
            category === 4 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(4)}
        >
          Entretenimiento
        </span>
        <span
          className={`${
            category === 5 ? "layout__category active" : "layout__category"
          }`}
          onClick={() => handleChange(5)}
        >
          Farandula
        </span>
      </div>
    </div>
  );
};

export default Layout;
