import React from "react";
import { Home } from "./pages/home";
import { Detail } from "./pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import store from "./redux/store/index";
import { Provider } from "react-redux";

// En esta aplicacion tenemos conceptos de typescript

// Uso de las {props} en HOME Y LIST
// Uso de los eventos en typesctpt en FORM

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/detail" element={<Detail />} />;
          <Route path="/auth/register" element={<Register />} />;
          <Route path="/auth/login" element={<Login />} />;
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
