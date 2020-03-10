import React, { Component } from "react";
import axios from "axios";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";
import rightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";

export default class Locations extends Component {
  state = {
    warehouseData: [],
    loading: true
  };

  componentDidMount() {
    console.log("didMount()");
    axios.get("/api/locations").then(res => {
      console.log("res data", res.data);
      this.setState({
        warehouseData: res.data,
        loading: false
      });
    });
  }

  render() {
    console.log("warehouse state data", this.state.warehouseData);
    return (
      <>
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
          {this.state.warehouseData.map(warehouse => {
            return (
              <div className="locations__item" key={warehouse.warehouseId}>
                <div className="locations__item-left">
                  <div className="locations__item-left-topWrap locations__item-topWrap">
                    <div className="locations__item-left-wrap locations__item-left-topWrap locations__item-left-topWrap-words ">
                      <h3 className="locations__item-left-topWrap-title">
                        WAREHOUSE
                      </h3>
                      <h3 className="locations__item-left-topWrap-words-title locations__item-left-title">
                        Warehouse Number: {warehouse.warehouseNumber}
                      </h3>
                      <p className="locations__item-left-topWrap-words-para locations__item-left-address locations__item-left-para">
                        {warehouse.address}
                      </p>
                    </div>
                  </div>
                  <div className="locations__item-left-wrapManagerContactCategories">
                    <div className="locations__item-left-wrap  locations__item-left-wrapManagerContactCategories-manager locations__item-left-para locations__item-left-manager">
                      <h3 className="locations__item-left-wrapManagerContactCategories-manager-title">
                        CONTACT
                      </h3>
                      <p className="locations__item-left-para locations__item-left-wrapManagerContactCategories-manager-name">
                        {warehouse.contactName}
                      </p>
                      <p className="locations__item-left-para locations__item-left-wrapManagerContactCategories-manager-job">
                        {warehouse.contactJob}
                      </p>
                    </div>
                    <div className="locations__item-left-wrap  locations__item-left-wrapManagerContactCategories-contact locations__item-left-para locations__item-left-contact">
                      <h3 className="locations__item-left-wrapManagerContactCategories-contact-title">
                        CONTACT INFORMATION
                      </h3>
                      <p className="locations__item-left-para locations__item-left-wrapManagerContactCategories-contact-phone">
                        {warehouse.contactInfoPhone}
                      </p>
                      <p className="locations__item-left-para locations__item-left-wrapManagerContactCategories-contact-email">
                        {warehouse.contactInfoEmail}
                      </p>
                    </div>
                    <div className="locations__item-left-wrap  locations__item-left-wrapManagerContactCategories-categories locations__item-left-para locations__item-left-contact">
                      <h3 className="locations__item-left-wrapManagerContactCategories-categories-title">
                        CATEGORIES
                      </h3>
                      <p className="locations__item-left-wrap  locations__item-left-para locations__item-left-wrapManagerContactCategories-categories">
                        {warehouse.categories}
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
            );
          })}
        </section>
      </>
    );
  }
}
