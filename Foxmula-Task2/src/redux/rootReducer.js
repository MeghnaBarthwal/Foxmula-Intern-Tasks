import { combineReducers } from "redux";
import reducer from "./weather/reducer";

const rootReducer = combineReducers({
  weather_record: reducer,
});

export default rootReducer;
