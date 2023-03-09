import { createStore } from "redux";
import { reducers } from "./reducers/index";

const initialState = {};
let devtools = (x) => x;
devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, initialState, devtools);

export default store;
