import { LOGIN, REGISTER } from "../types";

const INITIAL_STATE = {
  users: [],
  loggedIn: false,
  posts: [],
};

export default function userAuth(state = INITIAL_STATE, action) {
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
