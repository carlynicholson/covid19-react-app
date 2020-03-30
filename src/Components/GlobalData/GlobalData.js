import React, {useState, useEffect} from "react";
import {values, isEmpty, map} from "ramda";
import "./GlobalData.css";

const GlobalData = () => {
  const [globalData, setGlobalData] = useState([])
  useEffect(() => {
  fetch("https://thevirustracker.com/free-api?countryTotals=ALL")
    .then(res => res.json())
    .then(data => setGlobalData(data))
    .catch(err => console.log(err))
}, [])

  return (
<div className="stats-table">
  <div className="table-header">
  <h2>Statistics</h2>
  </div>
    <table>
      <tr className="column-headers">
      <th className="location-header">Location</th>
      <th>Confirmed cases</th>
      <th>Recovered</th>
      <th>Deaths</th>
    </tr>
    {!isEmpty(globalData) && (
      <React.Fragment>
        {map(item => (
        <tr className="table-data">
          <th className="location">{item.title}</th>
          <th>{item.total_cases}</th>
          <th>{item.total_recovered}</th>
          <th>{item.total_deaths}</th>
        </tr>
        ), values(globalData.countryitems[0]))}
      </React.Fragment>
    )}
    </table>
    </div>
) 
}
export default GlobalData;