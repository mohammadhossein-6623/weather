import React, { useState } from "react";
import "./weather.css";
import useWeather from "../../Hooks/useWeather";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import Input from "../Input/Input";

export default function Weather() {
  const [onSearch, setOnSearch] = useState("");
  const { weather, errorMessage, getWeatherData } = useWeather();

  const inputHandler = (event) => {
    if (event.key === "Enter") {
      getWeatherData(onSearch);
      setOnSearch(""); // Move this inside the custom hook
    }
  };

  return (
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
  );
}
