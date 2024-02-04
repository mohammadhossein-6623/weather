import { memo } from "react";
import DateComponent from "../Data/DateComponent";
import "./weatherInfo.css";

const WeatherInfo = memo(({ weather }) => {
  return (
    <main>
      <section className="location">
        <div className="city">
          {weather.name},{weather.sys.country}
        </div>
        <div className="date">{<DateComponent />}</div>
      </section>
      <div className="temp">
        {Math.floor(weather.main.temp - 273.15)}
        <span>°C</span>
      </div>
      <div className="weather">{weather.weather[0].main}</div>
      <div className="temp-minmax">
        {Math.floor(weather.main.temp_min - 273.15)}°C /{" "}
        {Math.floor(weather.main.temp_max - 273.15)}°C
      </div>
    </main>
  );
});

export default WeatherInfo;
