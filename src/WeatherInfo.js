import React from "react";
import FormattedDate from "../src/FormattedDate.js";
import WeatherIcon from "../src/WeatherIcon"
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <main className="current-weather-main">
                <div className="current-weather-details">
                    <h1 className="current-city">{props.data.city}</h1>

                    <ul className="descriptions">

                        <li className="data-description">{props.data.description.charAt(0).toUpperCase() + props.data.description.slice(1)}</li>

                        <li className="formatted-date">Last Updated | <FormattedDate date={props.data.date} /></li>
                    </ul>
                </div>

                <div className="weather-container">

                    <WeatherIcon code={props.data.icon} alt={props.data.description} />

                    <WeatherTemperature celcius={props.data.temperature} />

                    <div className="temperature-data">
                        <ul>
                            <li>Humidity : {" "} {Math.round(props.data.humidity)} %</li>
                            <li>Wind :{" "}{Math.round(props.data.wind)} km/h</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}