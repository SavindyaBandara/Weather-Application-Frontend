import React from 'react'
import CurrentWeather from '../current-weather/current-weather';
import { WEATHER_API_KEY,WEATHER_API_URL } from '../../api';
import { useState } from 'react';
import Forecast from '../forecast/forecast';
import Search from '../search/search';
import "./Main.css";


const Main = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange =(searchData) => {
    const [lat, lon ] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([CurrentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forcastResponse });
    })
    .catch((err) => console.log(err));
  }

console.log(currentWeather);
console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      
    </div>
    
  );
}

export default Main;
