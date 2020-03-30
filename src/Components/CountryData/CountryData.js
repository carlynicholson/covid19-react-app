import React from "react";

//FOR UNITED STATES
export default function CountryData() {
  fetch("https://thevirustracker.com/free-api?countryTotal=US")
    .then(res => res.json())
    .then(res => console.log(JSON.stringify(res)))
    .catch(err => console.log(err));
  return <div />;
}

/*
//FOR ALL COUNTRIES
export default function CountryData() {
  fetch("https://thevirustracker.com/free-api?countryTotals=ALL")
    .then(res => res.json())
    .then(res => console.log(JSON.stringify(res)))
    .catch(err => console.log(err));
  return <div />;
}
*/
