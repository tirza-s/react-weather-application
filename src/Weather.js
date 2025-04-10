import React, { useState } from "react";

import axios from "axios";

import FormattedDate from "../src/FormattedDate.js";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true,
            city: response.data.name,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
        })
    }

    if (weatherData.ready) {
        return (
            <div className="App">

                <div className="container">
                    {/*Search input*/}
                    <div className="weather-wrapper">
                        <header>
                            <form role="search" aria-label="Search for city weather">
                                <input type="search" id="search-input" placeholder="Enter a city..." autoFocus="on" />
                                <button>Search</button>
                            </form>
                        </header>
                        <hr />

                        {/*Main weather info*/}
                        <main className="current-weather-main">
                            <div className="current-weather-details">
                                <h1 className="current-city">{weatherData.city}</h1>

                                <ul className="date-description">

                                    <li className="formatted-date"><FormattedDate date={weatherData.date} /></li>

                                    <li className="data-description">{weatherData.description.charAt(0).toUpperCase() + weatherData.description.slice(1)}</li>

                                </ul>
                            </div>

                            <div className="weather-container">
                                <img
                                    src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                                    alt={weatherData.description}
                                    className="weather-icon"
                                />
                                <p className="current-weather-value">
                                    <span className="current-temperature">{Math.round(weatherData.temperature)}</span>
                                    <span className="unit">°C</span>

                                </p>
                                <div className="temperature-data">
                                    <ul>
                                        <li>Humidity : {" "} {Math.round(weatherData.humidity)} %</li>
                                        <li>Wind :{" "}{Math.round(weatherData.wind)} km/h</li>
                                    </ul>
                                </div>
                            </div>
                        </main>
                    </div>

                    <hr className="forecast-middle-line" />

                    {/* 5days Weather forecast  */}
                    <aside>
                        <h3>5 Days Forecast</h3>
                        <div className="forecast-wrapper">
                            <div className="days">
                                <p className="day">Sat</p>
                                <p className="forecast-icon">🌤️</p>
                                <p className="forecast-unit">11°C</p>
                            </div>
                            <div className="days">
                                <p className="day">Sun</p>
                                <p className="forecast-icon">🌤️</p>
                                <p className="forecast-unit">16°C</p>
                            </div>
                            <div className="days">
                                <p className="day">Mon</p>
                                <p className="forecast-icon">🌤️</p>
                                <p className="forecast-unit">12°C</p>
                            </div>

                            <div className="days">
                                <p className="day">Tue</p>
                                <p className="forecast-icon">🌤️</p>
                                <p className="forecast-unit">19°C</p>
                            </div>
                            <div class="days">
                                <p className="day">Wed</p>
                                <p className="forecast-icon">🌤️</p>
                                <p className="forecast-unit">21°C</p>
                            </div>

                        </div>
                        <hr />
                    </aside>
                </div>


            </div>
        );
    } else {
        const apiKey = "af533468bd45376f5296a15bb02118b1";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "loading..."
    }

}