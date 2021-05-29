import axios from "axios";
import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAILURE } from "./types";

export const WeatherRequest = () => {
  return {
    type: WEATHER_REQUEST,
  };
};

export const WeatherSuccess = (temp) => {
  return {
    type: WEATHER_SUCCESS,
    payload: temp,
  };
};

export const WeatherFailure = (error) => {
  return {
    type: WEATHER_FAILURE,
    payload: error,
  };
};

export const Weather = () => {
  return (dispatch) => {
    dispatch(WeatherRequest());
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=a631e386d2fc47702bcfd64f65d9fcb3&units=metric`
      )
      .then((respose) => {
        const temp = respose.data.main.temp;
        dispatch(WeatherSuccess(temp));
        console.log(temp);
      });
    // .catch((error) => {
    //   const errorMsg = error.message;
    //   dispatch(weatherFailure(errorMsg));
    // });
  };
};
