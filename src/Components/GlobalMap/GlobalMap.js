import React, {useEffect, useState} from "react";
import { VectorMap } from "react-jvectormap";
import { getData } from "country-list";
import "./GlobalMap.css";


  const handleClick = (e, countryCode) => {
    
    console.log(countryCode);
  };

  const GlobalMap = () => {

    const [countryCodeStateObj,setCountryCodeObj] = useState({})

    useEffect(() => {
      const makeAPICall = async () => {
        const res = await fetch(
          'https://pomber.github.io/covid19/timeseries.json'
        );

       const json = await res.json();
        const countryCodes = getData().map(d => {
          if (json[d.name]) {
            d.stats = json[d.name].reverse()[0];
          }
          return d;
        });

        
        let countryCodeStats = {}
        const countryCodesArr = countryCodes.map( country => {
          if(country.stats !== undefined) {
            countryCodeStats[country.code] = country.stats.confirmed
          } else {
            countryCodeStats[country.code] = 0
          }
        })
        setCountryCodeObj(countryCodeStats)
        
      };
      makeAPICall();
    }, []);

    return (
    <div>
    <div className="map-container">
    <h2 className="map-header">Confirmed cases of Coronavirus (COVID-19)</h2>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent"
        zoomOnScroll={false}
        onRegionClick={handleClick}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
            cursor: "pointer"
          },
          hover: { 
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
          selected: {
            fill: "#none",
            stroke: "#212121",
            "stroke-width": 1,
          },
          selectedHover: {
            "fill-opacity": 0.8,
          }
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: countryCodeStateObj,
              scale: ["#E5D1F9", "#5606A5"],
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    <div className="legend-title">Confirmed cases</div>
    <div class="wrapper">
      <div className="level-1"></div>
      <div className="level-2"></div>
      <div className="level-3"></div>
      <div className="level-4"></div>
      <div className="level-5"></div>
      
      <div className="data">0 - 49</div>
      <div className="data">50 - 199</div>
      <div className="data">200 - 499</div>
      <div className="data">500 - 999 </div>
      <div className="data">1,000 +</div>
    </div>
    </div>
    </div>
  );
};

export default GlobalMap;