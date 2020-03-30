import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalData from "./GlobalData/GlobalData";
import CountryData from "./CountryData/CountryData";
import About from "./About/About";

export default function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={GlobalData} />
        <Route path="/us" component={CountryData} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
}
