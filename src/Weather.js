import React, { useState } from "react";

import axios from "axios";

import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js"

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {

        console.log(response.data);

        setWeatherData({
            ready: true,
            city: response.data.name,
            coordinates: response.data.coord,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
            humidity: response.data.main.humidity,
            icon: response.data.weather[0].icon,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed
        });
    }

    function search() {
        const apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
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
                        {/*Weather forecast componet*/}
                        <WeatherForecast coordinates={weatherData.coordinates} />
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