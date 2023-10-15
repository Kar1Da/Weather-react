import "./style.css";
import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import WeatherForecast from "./WeatherForecast";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    if (response.data.temperature !== undefined) {
      setWeatherData({
        ready: true,
        coordinates: response.data.coordinates,
        temperature: response.data.temperature.current,
        wind: response.data.wind.speed,
        city: response.data.city,
        date: new Date(response.data.time * 1000),
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
      });
    } else {
      alert(`If you have this issue, you're probably :
    1. Misspelled the city name;
    2. Wrote a non-exicting place;
    3. Have problems with Wi-Fi connection or server;
    If you have any questions please contact this email : weather.4cast@gmail.com`);
    }

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
              <WeatherForecast coords={weatherData.coordinates} />
            </div>
            <div>
              This project was coded by Karina and is{" "}
              <a
                href="https://github.com/Kar1Da/Weather-react"
                alt="repository"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on GitHub
              </a>{" "}
              and{" "}
              <a
                href="https://cute-quokka-6cecc6.netlify.app/"
                alt="site"
                target="_blank"
                rel="noreferrer"
              >
                hosted on Netlify
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return <Loading />;
  }
}
