import React, {useState, useEffect} from "react";
import {values, isEmpty, map} from "ramda";
//Added Dependency https://github.com/s-yadav/react-number-format
import NumberFormat from 'react-number-format';
import "./GlobalData.css";

const GlobalData = () => {
  const [globalData, setGlobalData] = useState([])
  useEffect(() => {
  fetch("https://thevirustracker.com/free-api?countryTotals=ALL")
    .then(res => res.json())
    .then(data => setGlobalData(data))
    .catch(err => console.log(err))
}, [])
if(!globalData) {
  return <></>
} // error check, probably not needed.
  return (
<div className="stats-table">
  <div className="table-header">
  <h2>Statistics</h2>
  </div>
  <table>
    <tbody>
      <tr className="column-headers">
      <th className="location-header">Location</th>
      <th>Confirmed Cases</th>
      <th>Recovered</th>
      <th>Deaths</th>
    </tr>
    {!isEmpty(globalData) && (
      <React.Fragment>
        {map((item, i) => (
        <tr className="table-data" key={i}>
          <td className="location">{item.title}</td>
          <td><NumberFormat value={item.total_cases} displayType={'text'} thousandSeparator={true} /></td>
          <td><NumberFormat value={item.total_recovered} displayType={'text'} thousandSeparator={true} /></td>
          <td><NumberFormat value={item.total_deaths} displayType={'text'} thousandSeparator={true} /></td>
        </tr>
        
        ), values(globalData.countryitems[0]))}
      </React.Fragment>
    )}
    </tbody>
    </table>
    </div>
) 
}
export default GlobalData;