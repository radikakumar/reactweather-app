import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import Loader from "react-loader-spinner";


export default function Weather(){

let [Ready,setReady]= useState[false]
let [Dataweather,setDataweather]= useState({})
function displayWeather(response){
  console.log(response.data)
setReady(true)
setDataweather({
temperature:response.data.main.temp,
Humidity: response.data.main.humidity,
Wind:response.data.main.wind,
feels:response.data.main.feels_like,
city:response.data.name,


})


if (Ready) {return (
  <div className= "container">
  <img src ="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt ="cloudy"/>
  <br></br>
  <h2>{Math.round(Dataweather.temperature)}°C|°F </h2>
  <h3>{Dataweather.city}</h3>
  <br></br>
  <span>Humidity:{Dataweather.Humidity}% :</span>
  <span> Windspeed:{Dataweather.Wind}km/h</span>
  <p>Feelslike: {Dataweather.feels}°C</p>
  <h4>
  Date: Monday 10 May 2021
  </h4>

 <form>

  <input type ="search" placeholder="Enter a city"/>

   <input type ="submit"  value ="Search" />
 </form>
 <br></br>
 <p>Forecast</p>
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
    <span>Thurs: 20°C|°F </span></div>
</div>
</div>


 </div>
   
);



} else {
  let key= "2f9f7ec47cab1795a041f2ec45034bf2"
 let city= "New York"
 let Url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
 axios.get(Url).then(displayWeather) 
  
 return   (
  <Loader
    type="Audio"
    color="#00BFFF"
    height={100}
    width={100}
  
  />
 );
}
  
}
 
 }
      

