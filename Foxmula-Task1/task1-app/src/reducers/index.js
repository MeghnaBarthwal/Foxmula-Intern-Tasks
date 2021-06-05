import plusNumber from "./increment";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  increment: plusNumber,
});

export default rootReducer;
