import React from "react";

export default function WeatherTemp(props) {
  console.log(props);

  return (
    <div className="WeatherTemperature">
      <span id="degrees">{Math.round(props.celsius)}°</span>
      <span id="celsius">C</span>
    </div>
  );
}
