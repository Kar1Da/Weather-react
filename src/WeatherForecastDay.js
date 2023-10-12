import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temperature.maximum);
    return `${maxTemp}`;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temperature.minimum);
    return `${minTemp}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="card nextDays">
      <div className="card-header weekDays">
        <span className="tomorrow">{day()}</span>
      </div>
      <div className="card-header lowerInfo">
        <span className="firstDesk">{props.data.condition.description}</span>
      </div>

      <div className="card-body emojisCard">
        <p className="card-text weatherEmojis">
          <span>
            <img
              src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
              className="nextDayImage"
              alt="weatherImage"
            />
          </span>
        </p>
      </div>
      <div className="card-header forecastTemperature">
        <p>
          <span className="tomorrowTempMax max">{maxTemp()}°/ </span>
          <span className="tomorrowTempMin min">{minTemp()}°</span>
        </p>
      </div>
    </div>
  );
}
