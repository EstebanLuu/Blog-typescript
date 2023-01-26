import { LOGIN, REGISTER } from "../types";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  genre: "",
  description: "",
  img: "",
};

export default function userAuth(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.payload,
        loggedIn: true,
      };
    case REGISTER:
      return action.payload;
    default:
      return state;
  }
}
