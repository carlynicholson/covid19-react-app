import React from "react";

export default function GlobalData() {
  fetch("https://thevirustracker.com/free-api?global=stats")
    .then(res => res.json())
    .then(res => console.log(JSON.stringify(res)))
    .catch(err => console.log(err));

  return <div />;
}

/*
location
"total_cases":565970
"total_recovered":129309
"total_deaths":25421

*/
