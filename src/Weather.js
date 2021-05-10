import React from "react";

import "./Weather.css";
export default function Weather(){

    return (
      <div className= "container">
      <img src ="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt ="cloudy"/>
      <br></br>
      <h2>20°C|°F </h2>
      <br></br>
      <span>Humidity:10% :</span>
      <span> Windspeed:3km/h</span>
      <h3>
      Date: Monday 10 May 2021
      </h3>
    
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
}