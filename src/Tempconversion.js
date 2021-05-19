
import React, {useState} from "react";

export default function Tempconversion(props){
let [unit,setunit]= useState ("celcius");

function showcelcius (event){
event.preventDefault();
setunit("celcius");

}

function showFarenheit (event){
event.preventDefault();
setunit("farenheit");
}

if (unit==="celcius"){
return (
    <div>
    <span>{props.celcius}</span>
    <span>°C|<a href="/" onClick ={showFarenheit} ><strong>°F</strong></a></span>
     </div>
    );
    
} else {
    let Farenheit=Math.round(props.celcius*9/5+32)
  return(
  <div>
  <span>{Farenheit}</span>
  <span> <a href="/" onclick ={showcelcius} ><strong>°C</strong></a>|°F</span>
   </div>
  );
}
}