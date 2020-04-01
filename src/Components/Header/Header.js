import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
    <nav className="myTopNav">
    <div className="logo">
    <a href="/">Logo</a> 
    </div>
      <ul>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
    <div>
      <h1><a href="/">COVID-19 Tracker</a></h1>
    </div>
    </div>
  );
}
