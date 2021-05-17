import React from "react";

export default function RevisedDate(props){
let Year = props.date.getFullYear();
let days=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let Day = days[props.date.getDay()];
let months=["Jan", "Feb", "March", "April", "May", "June","July", "Aug", "Sept", "Oct", "Nov","Dec"];
let Month= months[props.date.getMonth()];
let Date= props.date.getDate();
let Hour=props.date.getHours();
if (Hour <10)
{Hour= (`0${Hour}`)}
let Minutes=props.date.getMinutes();
if (Minutes <10) {Minutes =(`0${Minutes}`)}
let Seconds=props.date.getSeconds();
if (Seconds<10) {Seconds= (`0${Seconds}`)}
    return (
     <div>
        <div>
     🗓️{Day} {Date} {Month}{Year} 
     </div>
     <div>
     ⌚ {Hour}:{Minutes}:{Seconds}
     </div>
     </div>
    );
   }
   