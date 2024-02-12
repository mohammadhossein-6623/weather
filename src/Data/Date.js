import React from "react";

const DateComponents = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayName = days[currentDate.getDay()];
    const day = currentDate.getDate();
    const monthName = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${dayName}, ${day} ${monthName} ${year}`;
  };

  return (
    <div>
      <p>{getCurrentDate()}</p>
    </div>
  );
};

export default DateComponents;
