// کامپوننت نمایش اطلاعات اب و هوا
import React from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

const WeatherDisplay = ({ weather, errorMessage }) => {
  return (
    <div>{weather && !errorMessage && <WeatherInfo weather={weather} />}</div>
  );
};

export default WeatherDisplay;
