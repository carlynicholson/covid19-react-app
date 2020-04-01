import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
    <div className="nav">
      <div className="nav-logo">
        <a href="/">Logo</a> 
      </div>
      <div className="nav-item">
        <a href="/about">About</a>
      </div>
    </div>
    <div className="header">
      <h1><a href="/">COVID-19 Tracker</a></h1>
    </div>
    </div>
  );
}
