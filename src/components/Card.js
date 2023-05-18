import React from 'react';
import Spinner from './Spinner';
import moment from 'moment';
import 'moment-timezone';

const Card = ({ loadingData, showData, weather, forecast }) => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = `${day}/${month}/${year}`;

  let url = '';
  let iconUrl = '';
  let iconUrl3 = '';
  let iconUrl6 = '';
  let iconUrl9 = '';

  let forecastDate3 = '';
  let forecastDate6 = '';
  let forecastDate9 = '';

  const sunriseTime = weather.sys?.sunrise ? moment.unix(weather.sys.sunrise).tz('Chile/Continental').format('h:mm A') : 'N/A';
  const sunsetTime = weather.sys?.sunset ? moment.unix(weather.sys.sunset).tz('Chile/Continental').format('h:mm A') : 'N/A';
  
  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = 'http://openweathermap.org/img/w/';
    iconUrl = `${url}${weather.weather[0].icon}.png`;
    iconUrl3 = `${url}${forecast.list[1].weather[0].icon}.png`;
    iconUrl6 = `${url}${forecast.list[2].weather[0].icon}.png`;
    iconUrl9 = `${url}${forecast.list[3].weather[0].icon}.png`;

    forecastDate3 = `${forecast.list[1].dt_txt.substring(8, 10)}/${forecast.list[1].dt_txt.substring(5, 7)}/${forecast.list[1].dt_txt.substring(0, 4)} | ${forecast.list[1].dt_txt.substring(11, 13)}hrs`;
    forecastDate6 = `${forecast.list[2].dt_txt.substring(8, 10)}/${forecast.list[2].dt_txt.substring(5, 7)}/${forecast.list[2].dt_txt.substring(0, 4)} | ${forecast.list[2].dt_txt.substring(11, 13)}`;
    forecastDate9 = `${forecast.list[3].dt_txt.substring(8, 10)}/${forecast.list[3].dt_txt.substring(5, 7)}/${forecast.list[3].dt_txt.substring(0, 4)} | ${forecast.list[3].dt_txt.substring(11, 13)}`;
  }


  return (
    <div className="mt-5">
      {showData ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className="card-title">La Cantina</h3>
                <p className="card-date">{date}</p>
                <h5 className="card-sunrise">Amanecer: {sunriseTime}</h5>
                <h5 className="card-sunset">Atardecer: {sunsetTime}</h5>
                <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                <p className="card-desc"><img src={iconUrl} alt="icon" /> {weather.weather[0].description}</p>
                <img className="img-fluid rounded-start" alt="..." src="/cantina.png" />
              </div>
              <div className="col-md-8">
  <div className="card-body text-start mt-4 datos">
    <h5 className="card-text">Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC </h5>
    <h5 className="card-text">Humedad: {weather.main.humidity}% </h5>
    <h5 className="card-text">Velocidad del viento: {weather.wind.speed}m/s </h5>
    <h5 className="card-text">Presión atmosférica: {weather.main.pressure}hPa </h5>
    <h5 className="card-text">Nubosidad: {weather.clouds.all}% </h5>
    <h5 className="card-text">Visibilidad: {weather.visibility} metros </h5>
  </div>
  <hr></hr>
  <div className="row mt-4 card-text">
    <div className="col">
      <p>{forecastDate3}</p>
      <p className="description"><img src={iconUrl3} alt="icon" />{forecast.list[1].weather[0].description}</p>
      <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
    </div>
    <div className="col">
      <p>{forecastDate6} hrs</p>
      <p className="description"><img src={iconUrl6} alt="icon" />{forecast.list[2].weather[0].description}</p>
      <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
    </div>
    <div className="col">
      <p>{forecastDate9} hrs</p>
      <p className="description"><img src={iconUrl9} alt="icon" />{forecast.list[3].weather[0].description}</p>
      <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
    </div>
  </div>
</div>
</div>
</div>
</div>
) : (
<h2 className="text-light">Sin datos</h2>
)}
</div>
);
};

export default Card;
