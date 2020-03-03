import React from "react";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";
import locationArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";

const Locations = () => {
  return (
    <section className="locations">
      <div className="locations__top">
        <h1 className="locations__top-title">Locations</h1>
        <div className="locations__top-wrap-searchForm">
          <form className="locations__top-wrap-searchForm" action="/">
            <div className="locations__top-wrap-searchForm-searchWrap">
              <input
                className="locations__top-wrap-searchForm-searchWrap-searchInput"
                type="text"
                name="search"
                placeholder="Search"
              />
              <img
                className="locations__top-wrap-searchForm-searchWrap-img"
                src={searchIcon}
                alt="Icon-search.svg"
              />
            </div>
          </form>
        </div>
        <div className="locations__top-wrap-itemTitlesWrap">
          <h3 className="locations__top-wrap-itemTitlesWrap-title">
            WAREHOUSE
          </h3>
          <h3 className="locations__top-wrap-itemTitlesWrap-title">CONTACT</h3>
          <h3 className="locations__top-wrap-itemTitlesWrap-title">
            CONTACT INFORMATION
          </h3>
        </div>
      </div>
      <div className="locations__item">
        <div className="locations__item-topWrap locations__item-wrap-top">
          <div className="locations__item-topWrap-words">
            <h3 className="locations__item-title">Warehouse number 1</h3>
            <p className="locations__item-para locations__item-address">
              469 King St W, Toronto, ON
            </p>
          </div>
          <div className="locations__item-topWrap-arrowWrap">
            <img
              className="locations__item-topWrap-arrowWrap-img"
              src={locationArrow}
              alt="arrow-right"
            />
          </div>
        </div>
        <div className="locations__item-wrap-wrapManagerContactCategories">
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
            Industrial, Automotive, Heavy, Mechanical, Engineering,
            Transportation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Locations;
