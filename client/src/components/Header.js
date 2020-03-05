import React from "react";
import logo from "../assets/Logo/Logo-instock.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__title--container">
        <Link to="/">
          <div className="Header__title--link">
            <img className="Header__title--img" src={logo} alt="Logo-instock" />
          </div>
        </Link>
      </div>
      <div className="Header__nav--container">
        <nav className="Header__nav">
          <div className="Header__nav--link-container Header__nav--link-container-bio">
            <Link to="/inventory">
              <p className="Header__nav--link">Inventory</p>
            </Link>
          </div>
          <div className="Header__nav--link-container">
            <Link to="/locations">
              <p className="Header__nav--link">Locations</p>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
//
