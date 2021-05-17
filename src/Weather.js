import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Loader from "react-loader-spinner";
import RevisedDate from "./RevisedDate";

export default function Weather(props) {
  let [Ready, setReady] = useState(false);
  let [Dataweather, setDataweather] = useState({});
  let [city, setCity] = useState(props.defaultCity);
  
  function displayWeather(response) {
    console.log(response.data);
    setReady(true);
    setDataweather({
      temperature: response.data.main.temp,
      Humidity: response.data.main.humidity,
      Wind: response.data.wind.speed,
      feels: response.data.main.feels_like,
      city: response.data.name,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function Search() {
    let key = "2f9f7ec47cab1795a041f2ec45034bf2";
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(Url).then(displayWeather);
  
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (Ready) {
    return (
      <div className="container">
       <div>
         
       </div>
       <span> <img src={Dataweather.icon} alt={Dataweather.description} /></span>
        <h3>
        {Dataweather.city}
        </h3>
        <h4>{Math.round(Dataweather.temperature)}°C|°F </h4>
        <br></br>
        <span>Humidity:{Dataweather.Humidity}% :</span>
        <span> Windspeed:{Math.round(Dataweather.Wind)}km/h</span>
        <p>😏Feelslike: {Math.round(Dataweather.feels)}°C</p>
        <h5><RevisedDate date={(new Date)} /></h5>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <p>⛈️Forecast</p>
        <div className="container">
          <div className="row">
            <div className="col">
              <span>Mon: 20°C|°F </span>
            </div>
            <div className="col">
              <span>Tues: 20°C|°F </span>
            </div>
            <div className="col">
              <span>Wed: 20°C|°F </span>
            </div>
            <div className="col">
              <span>Thurs: 20°C|°F </span>
            </div>
          </div>
        </div>
      
      </div>
    );
  } else {
    Search();
    return <Loader type="Audio" color="Green" height={100} width={100} timeout={2000000}/>;
  }
}