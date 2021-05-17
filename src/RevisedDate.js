import React from "react";

export default function RevisedDate(props){
   var Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   var Month=["January, February", "March", "April", 
   "May", "June","July","August", "September", "October", "November", "December"];
    
   var Day=Days[props.date.getDay()];
   var Date=props.date.getDate();
   var Hours=props.date.gethours();
   if (Hours<10){ Hours=`0${Hours}`};
   var Minutes=props.date.getMinutes();
   if (Minutes<10){Minutes=`0${Minutes}`;
   var Months=Month[props.getMonth()];
   var Year=props.date.getFullYear();
    return (
     <div>
     `🗓️{Day},{Date},{Hours}:{Minutes}{Months}{Year} `
     </div>
    );
   }
   }
