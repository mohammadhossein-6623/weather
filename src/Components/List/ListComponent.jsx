import { provinces } from "../../Data/Citys";
import "./list.css";

export default function ListComponent({ setCity, city, listHandler }) {
  const handleCityClick = (cityName) => {
    setCity(cityName);
    listHandler(cityName);
  };
  console.log(city);

  return (
    <aside className="aside-list">
      <h2 className="title-list">Cities of Iran</h2>
      <div className="container-province">
        <div className="content-province">
          {provinces.map((province, index) => (
            <li
              key={index}
              className="province"
              onClick={() => handleCityClick(province)}
            >
              {province}
            </li>
          ))}
        </div>
      </div>
    </aside>
  );
}
