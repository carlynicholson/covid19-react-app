import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
    <nav className="myTopNav">
    {/* <div className="logo">
    <a href="/"><img src="https://res.cloudinary.com/df6sigxz7/image/upload/v1585903818/covid-tracker/logo/orange2.png" alt="Logo"/></a> 
    </div> */}
      <ul>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
    <div className="header">
      <h1><a href="/">COVID-19 Tracker</a></h1>
    </div>
    </div>
  );
}
