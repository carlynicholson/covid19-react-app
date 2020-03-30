import React, {useState, useEffect} from 'react'
const CountryData = () => {
    const [countryData, setCountryData] = useState([])
    // set the default to either an empty array or an empty object depending on the format of the data you're going to fetch. You want them to match.
    useEffect(() => {
    fetch("https://thevirustracker.com/free-api?countryTotals=ALL")
      .then(res => res.json())
      .then(data => setCountryData(data))
      .catch(err => console.log(err))
}, [])
return (
<div>{JSON.stringify(countryData)}</div>
)
}

export default CountryData;

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

