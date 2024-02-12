// کامپوننت اصلی نمایش اب و هوا

import React, { useState } from "react";
import "./weather.css";
import useWeather from "../../Hooks/useWeather";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import Input from "../Input/Input";
import ListComponent from "../List/ListComponent";

export default function Weather() {
  const [onSearch, setOnSearch] = useState("");
  const { weather, errorMessage, getWeatherData } = useWeather();
  const [city, setCity] = useState();
  console.log(weather);
  const listHandler = (cityName) => {
    getWeatherData(city);
  };
  const inputHandler = (event) => {
    if (event.key === "Enter") {
      getWeatherData(onSearch);
      setOnSearch("");
    }
  };

  return (
    <div className="container-weather">
      <ListComponent
        setCity={setCity}
        errorMessage={errorMessage}
        listHandler={listHandler}
      />
      <div id="weather">
        <div>
          <h2 className="title">Weather in Your City / Country</h2>
          <Input
            onSearch={onSearch}
            setOnSearch={setOnSearch}
            inputHandler={inputHandler}
            errorMessage={errorMessage}
          />
        </div>

        <WeatherDisplay weather={weather} errorMessage={errorMessage} />
      </div>
    </div>
  );
}
