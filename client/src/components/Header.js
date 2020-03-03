import React from "react";
import logo from "../assets/Logo/Logo-instock.svg";

const Header = () => {
  return (
    <header className="Header">
      {/* <h1>hi</h1> */}
      <div className="Header__title--container">
        <a className="Header__title--link" href="index.html">
          <img className="Header__title--img" src={logo} alt="Logo-instock" />
        </a>
      </div>
      <div className="Header__nav--container">
        <nav className="Header__nav">
          <div className="Header__nav--link-container Header__nav--link-container-bio">
            <a className="Header__nav--link" href="./index.html">
              Inventory
            </a>
          </div>
          <div className="Header__nav--link-container">
            <a className="Header__nav--link" href="./shows.html">
              Locations
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
//
