import React from "react";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";


const Locations = () => {
  return (
    <section className="locations">
      <div className="locations__top">
        <div className="locations__top-wrap">
          <div className="locations__top-wrap-titleSearchWrap">
            <h1 className="locations__top-wrap-titleSearchWrap-title">
              Locations
            </h1>
            <div className="locations__top-wrap-titleSearchWrap-searchForm">
              <form
                className="locations__top-wrap-titleSearchWrap-searchForm"
                action="/"
              >
                <div className="locations__top-wrap-titleSearchWrap-searchForm-searchWrap">
                  <input
                    className="locations__top-wrap-titleSearchWrap-searchForm-searchWrap-searchInput"
                    type="text"
                    name="search"
                    placeholder="Search"
                  />
                  <img
                    className="locations__top-wrap-titleSearchWrap-searchForm-searchWrap-img"
                    src={searchIcon}
                    alt="Icon-search.svg"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="locations__top-wrap-itemTitlesWrap"></div>
        </div>
      </div>
      <div className="locations__item">
        <div className="locations__item-left">
          <div className="locations__item-left-topWrap locations__item-topWrap">
            <div className="locations__item-left-wrap locations__item-left-topWrap locations__item-left-topWrap-words ">
              <h3 className="locations__item-left-topWrap-title">WAREHOUSE</h3>
              <h3 className="locations__item-left-topWrap-words-title locations__item-left-title">
                Warehouse number 1
              </h3>
              <p className="locations__item-left-topWrap-words-para locations__item-left-address locations__item-left-para">
                469 King St W, Toronto, ON
              </p>
            </div>
          </div>
          <div className="locations__item-left-wrapManagerContactCategories">
            <div className="locations__item-left-wrap  locations__item-left-wrapManagerContactCategories-manager locations__item-left-para locations__item-left-manager">
              <h3 className="locations__item-left-wrapManagerContactCategories-manager-title">
                CONTACT
              </h3>
              <p className="locations__item-left-para locations__item-left-wrapManagerContactCategories-manager-name">
                Mara Weinberg
              </p>
              <p className="locations__item-left-para locations__item-left-wrapManagerContactCategories-manager-job">
                Warehouse Manager
              </p>
            </div>
            <div className="locations__item-left-wrap  locations__item-left-wrapManagerContactCategories-contact locations__item-left-para locations__item-left-contact">
              <h3 className="locations__item-left-wrapManagerContactCategories-contact-title">
                CONTACT INFORMATION
              </h3>
              <p className="locations__item-left-para locations__item-left-wrapManagerContactCategories-contact-phone">
                +1 416 678 2345
              </p>
              <p className="locations__item-left-para locations__item-left-wrapManagerContactCategories-contact-email">
                weinberg@instack.com
              </p>
            </div>
            <div className="locations__item-left-wrap  locations__item-left-wrapManagerContactCategories-categories locations__item-left-para locations__item-left-contact">
              <h3 className="locations__item-left-wrapManagerContactCategories-categories-title">
                CATEGORIES
              </h3>
              <p className="locations__item-left-wrap  locations__item-left-para locations__item-left-wrapManagerContactCategories-categories">
                Industrial, Automotive, Heavy, Mechanical, Engineering,
                Transportation
              </p>
            </div>
          </div>
        </div>
        <div className="locations__item-arrowWrap">
          <img
            className="locations__item-arrowWrap-img"
            src={rightArrow}
            alt="right-arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;
