import React, { useState, useEffect } from "react";
// import Form from "./Form";
import Card from "./Card";

const WeatherPanel = () => {
  const apiKey = "71ce8057cf08e0b762b140bc67d1ce31";
  const latitude = -46.067604;
  const longitude = -72.593321;
  const baseUrl = "https://api.openweathermap.org/data/2.5";
  const weatherUrl = `${baseUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=es`;
  const forecastUrl = `${baseUrl}/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=es`;

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);

        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) throw new Error("Failed to fetch weather data");
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        setWeather(weatherData);

        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) throw new Error("Failed to fetch forecast data");
        const forecastData = await forecastResponse.json();
        console.log(forecastData);
        setForecast(forecastData);

        setLoading(false);
        setShow(true);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setShow(false);
      }
    };

    fetchWeatherData();
  }, [weatherUrl, forecastUrl]);

  return (
    <React.Fragment>
      {/* <Form /> */}
      <Card showData={show} loadingData={loading} weather={weather} forecast={forecast} />
    </React.Fragment>
  );
};

export default WeatherPanel;
