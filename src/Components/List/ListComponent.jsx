// لیست شهرهای منتخب

import "./list.css";
import { provinces } from "../Data/DateComponent";
import { useState } from "react";
export default function ListComponent() {
  const [selectedProvince, setSelectedProvince] = useState(null);
  console.log(selectedProvince);

  const handleProvinceClick = (province) => {
    setSelectedProvince(province);
  };
  return (
    <aside className="aside-list">
      <h2 className="title-list">Cities of Iran</h2>
      <div className="container-province">
        <div className="content-province">
          {provinces.map((province, index) => (
            <li
              key={index}
              className="province"
              onClick={() => handleProvinceClick(province)}
            >
              {province}
            </li>
          ))}
        </div>
      </div>
    </aside>
  );
}
