import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celcius")

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function fahrenheit() {
        return (props.celcius * 9 / 5) + 32
    }

    function convertToCelcius(event) {
        event.preventDefault();
        setUnit("celcius")
    }

    if (unit === "celcius") {
        return (
            <span className="WeatherTemperature">
                <p className="current-weather-value">

                    <span className="current-temperature">{Math.round(props.celcius)}</span>

                    <span className="unit">°C | <a href="/" onClick={convertToFahrenheit}>°F</a> </span>
                </p>

            </span>
        );
    } else {
        return (
            <span className="WeatherTemperature">
                <p className="current-weather-value">

                    <span className="current-temperature">{Math.round(fahrenheit())}</span>

                    <span className="unit">
                        <a href="/" onClick={convertToCelcius}>°C </a> {" "}
                        | °F
                    </span>
                </p>

            </span>
        )
    }

}