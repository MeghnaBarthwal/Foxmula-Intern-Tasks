import { WEATHER_FAILURE, WEATHER_REQUEST, WEATHER_SUCCESS } from "./types";

const initialState = {
  loading: false,
  temp: "",
  error: "",
};

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case WEATHER_SUCCESS:
      return {
        loading: false,
        temp: action.payload,
        error: "",
      };
    case WEATHER_FAILURE:
      return {
        loading: false,
        temp: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export default WeatherReducer;
