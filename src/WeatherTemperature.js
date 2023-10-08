import React, { useState } from "react";

export default function WeatherTemp(props) {
  console.log(props);
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    console.log(unit);
    console.log(props.celsius);
    return (
      <div className="WeatherTemperature">
        <span id="degrees">{Math.round(props.celsius)}°</span>
        <button type="button" id="celsius">
          C
        </button>
        <span className="stick">|</span>
        <button type="button" id="fahrenheit" onClick={showFahrenheit}>
          F
        </button>
      </div>
    );
  } else {
    console.log(unit);
    return (
      <div className="WeatherTemperature">
        <span id="degrees">{Math.round(fahrenheit())}°</span>
        <button type="button" id="celsius" onClick={showCelsius}>
          C
        </button>
        <span className="stick">|</span>
        <button type="button" id="fahrenheit">
          F
        </button>
      </div>
    );
  }
}
