// WeatherInput.js
import React from "react";

const Input = ({ onSearch, setOnSearch, inputHandler, errorMessage }) => {
  return (
    <div>
      <input
        onChange={(event) => setOnSearch(event.target.value)}
        value={onSearch}
        className="search"
        type="text"
        maxLength="27"
        onKeyUp={inputHandler}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Input;
