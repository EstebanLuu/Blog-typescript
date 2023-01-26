import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../style.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="login-container">
        <div className="login__about-container"></div>
        <div className="login__form-container">
          <div className="login__card">
            <div className="login__logo-container">
              <span className="nav__title">BlogTypescript</span>
            </div>
            <form>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="login__login-register">
                <div className="login__login-register-1">
                  <button>Loguearse</button>
                  <Link to="/auth/register">
                    <p>No tienes cuenta?</p>
                  </Link>
                </div>
                <div className="login__login-register-2"></div>
                <div className="login__with-g-g">
                  <div className="login__with github">
                    <picture>
                      <i className="bx bxl-github"></i>
                    </picture>
                    <span>Logueate con GitHub</span>
                  </div>
                  <div className="login__with google">
                    <picture>
                      <i className="bx bxl-google"></i>
                    </picture>
                    <span>Logueate con google</span>
                  </div>
                  <p>Olvidaste tu contraseña?</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
