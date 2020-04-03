import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h2>About the data</h2>
      <h3>It changes rapidly</h3>
      <p>This data changes rapidly, so what’s shown may be out of date. Table totals may not always represent an accurate sum. 
        Information about reported cases is also available on the <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports">World Health Organization site</a>.</p>
      <h3>It doesn’t include all cases</h3>
      <p>Confirmed cases aren’t all cases. They only include people who tested positive. 
        Testing rules and availability vary by country.</p>
     <div className="source">
       <p><em><a href="https://google.com/covid19-map/">Source</a></em></p>
    </div>   
    </div>
  );
}
