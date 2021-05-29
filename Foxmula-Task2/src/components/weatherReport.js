import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Weather } from "../redux/weather/action";

const WeatherReport = ({ tempData, Weather }) => {
  useEffect(() => {
    Weather();
  }, [Weather]);
  return tempData.loading ? (
    <h1>Loading...</h1>
  ) : tempData.error ? (
    <h1>{tempData.error}</h1>
  ) : (
    <h1>{tempData.temp} Degree Celcius</h1>
  );
};

const mapStateToProps = (state) => {
  return {
    tempData: state.weather_record,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Weather: () => dispatch(Weather()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherReport);
