import React, { useState } from "react";

import axios from "axios";

import ReactAnimatedWeather from 'react-animated-weather';
import './App.css';


export default function Weather() {
    return (
        <div className="App">

            <div class="container">
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
                            <h1 className="current-city">Brussels</h1>
                            <ul>
                                <li>Thursday, 12:00</li>
                                <li>Sunny</li>
                            </ul>
                        </div>

                        <div className="weather-container">
                            <ReactAnimatedWeather
                                icon="CLEAR_DAY"
                                color="#c58940"
                                size={60}
                                animate={true}
                            />
                            <p className="current-weather-value">
                                <span className="current-temperature">16</span>
                                <span className="unit">°C</span>

                            </p>
                            <div class="temperature-icon">
                                <ul>
                                    <li>Humidity: 52%</li>
                                    <li>Wind: 11 km/h</li>
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

            <footer>
                This project was coded by {" "}
                <a href="https://tirzasamosir.netlify.app/" target="_blank" rel="noopener noreferrer">Tirza Samosir</a>{" "} and is {" "}

                <a href="https://github.com/tirza-s" target="_blank" rel="noopener noreferrer">open-sourced on github</a>
            </footer>
        </div>
    );

}