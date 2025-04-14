import React, { useState } from "react";

import axios from "axios";

import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
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
            wind: response.data.wind.speed
        });
    }

    function search() {
        const apiKey = "af533468bd45376f5296a15bb02118b1";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleSearchCity(event) {
        setCity(event.target.value)
    }

    if (weatherData.ready) {
        return (
            <div className="App">

                <div className="container">
                    {/*Search input*/}
                    <div className="weather-wrapper">
                        <header>
                            <form onSubmit={handleSubmit} role="search" aria-label="Search for city weather">
                                <input type="search" id="search-input" placeholder="Enter a city..." autoFocus="on" onChange={handleSearchCity} />
                                <button>Search</button>
                            </form>
                        </header>

                        <hr />

                        {/*Main weather info*/}
                        <WeatherInfo data={weatherData} />
                    </div>

                    <hr className="forecast-middle-line" />

                    {/* 5days Weather forecast  */}
                    <aside>
                        <h3>5 Days Forecast</h3>
                        <div className="forecast-wrapper">
                            <div className="days">
                                <p className="day">Sat</p>
                                <span role="img" aria-label="weather icon">🌦️</span>
                                <p className="forecast-unit">11°C</p>
                            </div>
                            <div className="days">
                                <p className="day">Sun</p>
                                <span role="img" aria-label="weather icon">🌦️</span>
                                <p className="forecast-unit">16°C</p>
                            </div>
                            <div className="days">
                                <p className="day">Mon</p>
                                <span role="img" aria-label="weather icon">🌦️</span>
                                <p className="forecast-unit">12°C</p>
                            </div>

                            <div className="days">
                                <p className="day">Tue</p>
                                <span role="img" aria-label="weather icon">🌦️</span>
                                <p className="forecast-unit">19°C</p>
                            </div>
                            <div class="days">
                                <p className="day">Wed</p>
                                <span role="img" aria-label="weather icon">🌦️</span>
                                <p className="forecast-unit">21°C</p>
                            </div>

                        </div>
                        <hr />
                    </aside>
                </div>
            </div>
        );
    } else {
        search();
        return "Loading..."
    }

}