import React from "react";

export default function Weatherforecastday(props){
   function maxTemp(){
    let max=Math.round(props.data.temp.max);
    return `${max}`;
   }

   function minTemp(){
    let min=Math.round(props.data.temp.min);
    return `${min}`;
   }
   function day (){
   let date=new Date();
   
   let days =["Sun", "Mon", "Tues", "Wed","Thurs", "Fri","Sat"]
    return (days[date.getDay()]);
  

   }
   
    return(
    <div>
    
    <div>
    {day()}: 
    <span className="max">{maxTemp()}°C|</span>
    <span className="min">{minTemp()}°C</span>
     </div>
     </div>
    )
    
}
