import React, { useState, useEffect } from "react";

import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState([]);

    useEffect(() => {
        const forecastApiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
        const { lat, lon } = props.coordinates;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${forecastApiKey}&units=metric`;

        axios.get(forecastUrl).then((response) => {
            const forecastList = response.data.list;
            const today = new Date().toISOString().split("T")[0];

            //This will store daily grouped entries`
            const daysMap = {};

            forecastList.forEach((entry) => {
                const entryDate = new Date(entry.dt * 1000).toISOString().split("T")[0];
                if (entryDate === today) return // skip today

                // if we don't have this day yet, then create it
                if (!daysMap[entryDate]) {
                    daysMap[entryDate] = {
                        temp_min: [],
                        temp_max: [],
                        icon: entry.weather[0].icon,
                        dt: entry.dt, // for getting the weekday later
                    };
                }
                daysMap[entryDate].temp_min.push(entry.main.temp_min);
                daysMap[entryDate].temp_max.push(entry.main.temp_max);
            });

            // Create array from the map
            const dailyForecasts = Object.entries(daysMap)
                .slice(0, 5)
                .map(([dateKey, data]) => ({
                    date: dateKey,
                    icon: data.icon,
                    dt: data.dt,
                    min: Math.min(...data.temp_min),
                    max: Math.max(...data.temp_max),

                }));
            setForecastData(dailyForecasts);
            setLoaded(true);
        });
    }, [props.coordinates]);

    if (!loaded) return null;

    return (
        <div className="forecast-wrapper">
            {forecastData.map((day, index) => {
                const weekday = new Date(day.dt * 1000).toLocaleDateString("en-GB", { weekday: "short" });

                return (
                    <div className="days" key={index}>
                        <p className="day">{weekday}</p>
                        <div className="forecast-icon">
                            <WeatherIcon code={day.icon} size={36} />
                        </div>
                        <div className="forecast-min-max">
                            <p className="forecast-unit-max">{Math.round(day.max)}°C</p>
                            <p className="forecast-unit-min">{Math.round(day.min)}°C</p>
                        </div>
                    </div>
                )
            })}
        </div >
    );
}