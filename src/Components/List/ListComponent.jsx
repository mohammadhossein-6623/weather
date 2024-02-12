import { provinces } from "../../Data/Citys";
import "./list.css";

export default function ListComponent({
  errorMessage,
  setCity,
  city,
  listHandler,
}) {
  const handleCityClick = (cityName) => {
    setCity(cityName); // تنظیم کردن نام شهر در استیت city
    listHandler(cityName); // فراخوانی متد listHandler با نام شهر مورد نظر
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </aside>
  );
}
