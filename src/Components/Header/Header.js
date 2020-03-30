import React from "react";

export default function Header() {
  return (
    <div className="nav">
      <div className="nav-item">
        <span className="nav-logo">
          <a href="/">Logo</a>
        </span>
      </div>
      <div className="nav-item">
        <a href="/">Global</a>
      </div>
      <div className="nav-item">
        <a href="/us">United States</a>
      </div>
      <div className="nav-item">
        <a href="/about">About</a>
      </div>
    </div>
  );
}
