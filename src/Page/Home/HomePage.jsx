import React from "react";
import "./Home.css";
import Weather from "../../Components/Weather/Weather";
import ListComponent from "../../Components/List/ListComponent";

export default function HomePage() {
  return (
    <div id="home">
      <ListComponent />
      <Weather />
    </div>
  );
}
