import { combineReducers } from "redux";
import userInputReducer from "./userInputReducer.js";

const rootReducer = combineReducers({ userInputReducer });

export default rootReducer;
