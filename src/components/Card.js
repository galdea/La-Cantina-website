import React from 'react';
import Spinner from './Spinner';

const Card = ({ loadingData, showData, weather, forecast }) => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;
    let url = "";
    let iconUrl = "";
    let iconUrl3 = "";
    let iconUrl6 = "";
    let iconUrl9 = "";

    let forecastDate3 = "";
    let forecastDate6 = "";
    let forecastDate9 = "";

    if (loadingData) {
        return <Spinner />;
    }
    if (showData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";


    }

    return (
        <div className='mt-5'>
            {showData ? (
                <div className='container'>
                    <div className='card mb-3 mx-auto bg-dark text-light'>
                        <div className='row g-0'>
                            <div className='col-md-4'>
                                <h3 className='card-title'>La Cantina</h3>
                                <p className='card-date'>{date}</p>
                                <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                                <p className='card-desk'><img src={iconUrl} alt='icon' /> {weather.weather[0].description}</p>
                                <img
                                    className="img-fluid rounded-start"
                                    alt="..."
                                    src="/cantina.png"
                                />
                            </div>

                            <div className='col-md-8'>
                                <div className='card-body text-start mt-2'>
                                    <h5 className='card-text'>Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                    <h5 className='card-text'>Temperatura máxima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                    <h5 className='card-text'>Sensación técnica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC </h5>
                                    <h5 className='card-text'>Humedad: {(weather.main.humidity)}% </h5>
                                    <h5 className='card-text'>Velocidad del viento: {(weather.wind.speed)}m/s </h5>
                                    <h5 className='card-text'>Presión atmosférica: {(weather.main.pressure)}hPa </h5>
                                    <h5 className='card-text'>Nubosidad: {(weather.clouds.all)}% </h5>
                                    <h5 className='card-text'>Amanecer: {(weather.sys.sunrise)} AM </h5>
                                    <h5 className='card-text'>Atardecer: {(weather.sys.sunset)} PM </h5>



                                </div>
                                <hr></hr>>
                                
                                
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
