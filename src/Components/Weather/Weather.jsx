import React, { useState } from "react";
import "./weather.css";
import apiRequests from "../../services/Axios/Configs";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import Input from "../Input/Input";

export default function Weather() {
  const [onSearch, setOnSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const getWeatherData = async (cityName) => {
    try {
      const res = await apiRequests.get("/data/2.5/weather", {
        params: {
          q: cityName,
          appid: "08b53885fe5c4b4a1856ce0d6d77038c",
        },
      });

      if (res.data.cod !== 200) {
        setErrorMessage(res.data.message);
        setWeather(null);
      } else {
        setWeather(res.data);
        setErrorMessage("");
      }
      setOnSearch("");
    } catch (error) {
      setErrorMessage("Really? Write the name of a city!!");
      console.error("Error fetching weather data:", error);
    }
  };

  const inputHandler = (event) => {
    if (event.key === "Enter") {
      getWeatherData(onSearch);
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
