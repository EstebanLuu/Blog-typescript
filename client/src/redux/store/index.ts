import { createStore } from "redux";
import reducer from "../reducers";

export const store = createStore(reducer);

// store.suscribe(() => console.log(store));

export default store;
