import React, {useState,useEffect} from "react";
import "./Forcast.css"
import Loader from "react-loader-spinner";
import axios from"axios";
import Weatherforecastday from "./Weatherforecastday";


export default function Forecast (props){
const [Ready,setReady]  = useState(false);
const [Forecast,setForecast]=useState(null);

useEffect(()=>{
    setReady(false);
},[props.data]);

function displayresponse (response){
    console.log (response);
    setReady(true);
    setForecast(response.data.daily);
    
   }

    
   if (Ready) {
       return(
    <div className="container">
        <br></br>
        <p>
     ⛈️ Forecast
         </p>
        <br></br>
      <div className="row">
      <div className="col">
            <Weatherforecastday  data={Forecast[0]} />
        </div>
        <div className="col">
            <Weatherforecastday  data={Forecast[1]} />
        </div>
        
        <div className="col">
            <Weatherforecastday  data={Forecast[2]} />
        </div>
        <div className="col">
            <Weatherforecastday  data={Forecast[3]} />
        </div>
      
        <div className="col">
            <Weatherforecastday  data={Forecast[4]} />
        </div>
        
        </div>
      </div>
      );
       
   } else {
    let key = "2f9f7ec47cab1795a041f2ec45034bf2";
    let latitude =props.lat;
    let longitude =props.lon;
    let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
   axios.get(url).then (displayresponse);
    
    return <Loader type="Audio" color="Green" height={50} width={50} timeout={2000000}/>;

   
   }
}

