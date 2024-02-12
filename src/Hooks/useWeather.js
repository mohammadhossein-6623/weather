import { useState } from "react";
import apiRequests from "../services/Axios/Configs";

const useWeather = () => {
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
    } catch (error) {
      setErrorMessage("Really? Write the name of a city!!");
      console.error("Error fetching weather data:", error);
    }
  };
  const updateCity = (newCityName) => {
    getWeatherData(newCityName);
  };

  return { weather, errorMessage, getWeatherData, updateCity };
};

export default useWeather;
