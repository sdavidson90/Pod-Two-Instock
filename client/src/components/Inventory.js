import React from "react";
import Search from "../assets/Icons/SVG/Icon-search.svg";

const Inventory = () => {
  return (
    <div>
      <h1>Inventory</h1>
      <form className="header__search">
        <input
          className="header__search-image"
          type="image"
          src={Search}
          alt="search"
        />
        <input
          className="header__search-bar"
          name="search"
          placeholder="Search"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default Inventory;
