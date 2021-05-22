import React from "react";
import "./Forcast.css"
import axios from"axios";
export default function Forecast (props){
   
   function displayresponse (response){
       console.log (response);
   }

    let key = "2f9f7ec47cab1795a041f2ec45034bf2";
    let longitude = props.lon;
    let latitude =props.lat;
    let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
   axios.get(url).then (displayresponse);

    return(
    
    <div className="container">
        <br></br>
        <div>
      ⛈️ Forecast
        </div>
        <br></br>
      <div className="row">
        <div className="col">
          🌤️Mon: 
          <span className="max">20°C |</span>
          <span className="min">19°C</span>
        </div>
        </div>
      </div>
      );
}
