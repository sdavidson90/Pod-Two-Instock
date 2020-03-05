import React from "react";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";
import locationArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";

const Locations = () => {
  return (
    <section className="locations">
      <div className="locations__top">
        <h1 className="locations__top-title">Locations</h1>
        <form className="locations__top-searchForm" action="/">
          <div className="locations__top-searchForm-searchWrap">
            <input
              className="locations__top-searchForm-searchWrap-searchInput"
              type="text"
              name="search"
              placeholder="Search"
            />
            <img
              className="locations__top-searchForm-searchWrap-img"
              src={searchIcon}
              alt="Icon-search.svg"
            />
          </div>
        </form>
      </div>
      <div className="locations__item">
        <div className="locations__item-wrap locations__item-wrap-top">
          <div className="locations__item-wrap-words">
            <h3 className="locations__item-title">Warehouse number 1</h3>
            <p className="locations__item-para locations__item-address">
              469 King St W, Toronto, ON
            </p>
          </div>
          <div className="locations-item-wrap-arrowWrap">
            <img
              className="locations-item-wrap-arrowWrap"
              src={locationArrow}
              alt=""
            />
          </div>
        </div>
        <div className="locations__item-wrap locations__item-para locations__item-manager">
          <p className="locations__item-para locations__item-manager-name">
            Mara Weinberg
          </p>
          <p className="locations__item-para locations__item-manager-job">
            Warehouse Manager
          </p>
        </div>
        <div className="locations__item-wrap locations__item-para locations__item-contact">
          <p className="locations__item-para locations__item-contact-phone">
            +1 416 678 2345
          </p>
          <p className="locations__item-para locations__item-contact-email">
            weinberg@instack.com
          </p>
        </div>
        <p className="locations__item-para locations__item-categories">
          Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation
        </p>
      </div>
    </section>
  );
};

export default Locations;
