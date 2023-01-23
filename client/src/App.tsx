import React from "react";
import { Home } from "./pages/home";
import { Detail } from "./pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// En esta aplicacion tenemos conceptos de typescript

// Uso de las {props} en HOME Y LIST
// Uso de los eventos en typesctpt en FORM

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/detail" element={<Detail />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default App;
