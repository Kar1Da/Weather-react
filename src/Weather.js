import "./style.css";
import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
    });

    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "6f75o9ff2b2c1797a73f7cb01efdat74";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="mainWrapper">
            <div className="wrapper">
              <form onSubmit={handleSubmit} id="searchCity-form">
                <div className="input-group mb-4 firstGroup">
                  <input
                    type="text"
                    className="form-control mainInput"
                    placeholder="Search city..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    id="city-input"
                    onChange={handleCityChange}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary searchButton ps-4 pe-4"
                  >
                    Search
                  </button>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
            </div>
            <a
              href="https://github.com/Kar1Da/Weather-react"
              alt="repositories"
            >
              My repositories
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
