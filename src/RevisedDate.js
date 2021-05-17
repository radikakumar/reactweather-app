import React from "react";

export default function RevisedDate(props){
   let Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   let Month=["January, February", "March", "April", 
   "May", "June","July","August", "September", "October", "November", "December"];
    
   let Day=Days[props.date.getDay()];
   let Date=props.date.getDate();
   let Hours=props.date.gethours();
   if (Hours<10){ Hours=`0${Hours}`};
   let Minutes=props.date.getMinutes();
   if (Minutes<10){Minutes=`0${Minutes}`;
   let Months=Month[props.getMonth()];
   let Year=props.date.getFullYear();
    return (
     <div>
     `🗓️{Day},{Date},{Hours}:{Minutes}{Months}{Year} `
     </div>
    );
   }
   }
