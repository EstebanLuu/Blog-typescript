import { combineReducers } from "redux";
import userAuth from "./users";

const reducer = combineReducers({
  user: userAuth,
});

export default reducer;
