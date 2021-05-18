
import React, {useState} from "react";

export default function Tempconversion(props){
let [unit,setunit]= useState ("celcius");

function showcelcius (event){
event.preventDefault();
unit("celcius");

}

function Farenheit (event){
event.preventDefault();
setunit("farenheit");
}

if (unit==="celcius"){
return (
    <div>
    <span>{props.celcius}</span>
    <span>°C|°F<a href="/" onclick ={Farenheit} ></a></span>
     </div>
    );
    
} else {
    let Farenheit=props.celcius*9/5+32
  return(
  <div>
  <span>{Farenheit}</span>
  <span>°C <a href="/" onclick ={showcelcius} ></a>|°F</span>
   </div>
  );
}
}