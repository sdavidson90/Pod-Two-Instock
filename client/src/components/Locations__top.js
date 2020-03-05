import React from "react";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";

const Locations = () => {
  return (
    <section className="locations">
      <div className="locations__wrapSearch">
        <input
          className="locations__wrapSearch-input"
          type="text"
          name="search"
          placeholder="Search"
        />
        <img
          className="locations__wrapSearch-img"
          src={searchIcon}
          alt="Icon-search.svg"
        />
      </div>
    </section>
  );
};

export default Locations;
