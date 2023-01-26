import { useEffect, useState  ,ChangeEvent, SyntheticEvent, } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style.scss";
import { userRegister } from "@/types";
import { createStore } from "redux";
import { registerUser } from "@/redux/actions/actions";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const state = useSelector((state: typeof createStore) => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(state);
  // }, []);

  const [input, setInput] = useState<userRegister>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setInput({
      name: "",
      email: "",
      password: "",
    });
   
    }
  };
  return (
    <div className="login-container">
      <div className="login__about-container"></div>
      <div className="login__form-container">
        <div className="login__card">
          <form>
            <div className="login__logo-container">
              <span className="nav__title">BlogTypescript</span>
            </div>
            <label htmlFor="name">Nombre</label>
            <input
              type="name"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="newUser@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Confirmar contraseña</label>
            <input
              type="ConfirmPassword"
              name="ConfirmPassword"
              id="ConfirmPassword"
              placeholder="*********"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="login__login-register">
              <div className="login__login-register-1">
                <button type="submit">Registrarse</button>
              </div>
              <div className="login__login-register-2">
                {/* {error && <span>"error"</span>} */}
              </div>
              <div className="login__with-g-g">
                <div className="login__with github">
                  <picture>
                    <i className="bx bxl-github"></i>
                  </picture>
                  <span>Registrarse con GitHub</span>
                </div>
                <div className="login__with google">
                  <picture>
                    <i className="bx bxl-google"></i>
                  </picture>
                  <span>Registrarse con Google</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
