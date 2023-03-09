import { combineReducers } from "redux";
import { weatherReducer } from "./weatherReducer";

export const reducers = combineReducers({
  data: weatherReducer,
});
