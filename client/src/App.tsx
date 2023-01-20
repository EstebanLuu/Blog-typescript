import React from "react";
import { Home } from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Culture } from "./components/categories";

// En esta aplicacion tenemos conceptos de typescript

// Uso de las {props} en HOME Y LIST
// Uso de los eventos en typesctpt en FORM

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
