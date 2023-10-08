import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="card-body innerContent">
      <div className="row g-0 firstRow">
        <div className="col-auto city">
          <h1 id="city">{props.data.city}</h1>
        </div>
        <div className="col-auto temperature">
          <h1>
            <WeatherTemp celsius={props.data.temperature} />
          </h1>
        </div>

        <div className="col-auto bonusInfo">
          <div className="col">
            <span>
              Humidity: {Math.round(props.data.humidity)}%
              <span className="humidity"></span>
            </span>
          </div>
          <div className="col">
            <span>
              Wind: {Math.round(props.data.wind)}km/h
              <span className="windSpeed"></span>
            </span>
          </div>
        </div>
        <div className="col-md-auto ms-md-auto todaysInfo">
          <div className="col today">
            <FormattedDate date={props.data.date} thisDay={true} />
          </div>
          <div className="col time">
            <FormattedDate date={props.data.date} thisDay={false} />
          </div>
          <div className="col-auto weather">{props.data.description}</div>
        </div>
      </div>
    </div>
  );
}
