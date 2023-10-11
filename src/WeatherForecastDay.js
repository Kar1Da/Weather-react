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
        <span className="nextDayOne"></span>
        <span className="nextDayTwo"></span>
        <span className="nextDayThree"></span>
        <span className="nextDayFour"></span>
      </div>
      <div className="card-header lowerInfo">
        <span className="firstDesk">{props.data.condition.description}</span>
        <span className="secondDesk"></span>
        <span className="thirdDesk"></span>
        <span className="fourthDesk"></span>
        <span className="fifthDesk"></span>
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
          <span>
            <img src="" className="secondDayImage" />
          </span>

          <span>
            <img src="" className="thirdDayImage" />
          </span>

          <span>
            <img src="" className="fourthDayImage" />
          </span>

          <span>
            <img src="" className="fifthDayImage" />
          </span>
        </p>
      </div>
      <div className="card-header forecastTemperature">
        <p>
          <span className="tomorrowTempMax max">{maxTemp()}°/ </span>
          <span className="tomorrowTempMin min">{minTemp()}°</span>
        </p>

        <p>
          <span className="dayTwoTempMax max"></span>
          <span className="dayTwoTempMin min"></span>
        </p>

        <p>
          <span className="dayThreeTempMax max"></span>
          <span className="dayThreeTempMin min"></span>
        </p>

        <p>
          <span className="dayFourTempMax max"></span>
          <span className="dayFourTempMin min"></span>
        </p>

        <p>
          <span className="dayFiveTempMax max"></span>
          <span className="dayFiveTempMin min"></span>
        </p>
      </div>
    </div>
  );
}
