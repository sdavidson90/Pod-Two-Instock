import React from "react";
import leftArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import threeDots from "../assets/Icons/SVG/Icon-kebab-default.svg";
// import searchIcon from "../assets/Icons/SVG/Icon-search.svg";

const LocationsDetails = () => {
  return (
    <section className="LocationsDetails">
      <div className="LocationsDetails__warehouse">
        <div className="LocationsDetails__warehouse-header">
          <div className="LocationsDetails__warehouse-header-arrowWrap">
            <img
              className="LocationsDetails__warehouse-header-arrowWrap-img"
              src={leftArrow}
              alt="left-arrow"
            />
          </div>
          <div className="LocationsDetails__warehouse-header-title">
            Warehouse Name
          </div>
        </div>
        <div className="LocationsDetails__warehouse-addressContactWrap">
          <div className="LocationsDetails__warehouse-addressContactWrap-address">
            <div className="LocationsDetails__warehouse-addressContactWrap-address-title">
              ADDRESS
            </div>
            <div className="LocationsDetails__warehouse-addressContactWrap-address-line1">
              123 Main Street W.
            </div>
            <div className="LocationsDetails__warehouse-addressContactWrap-address-line2">
              Suite 201
            </div>
            <br />
            <div className="LocationsDetails__warehouse-addressContactWrap-address-line3">
              Toronto, ON
            </div>
            <div className="LocationsDetails__warehouse-addressContactWrap-address-line4">
              M65GB7 CA
            </div>
          </div>
          <div className="LocationsDetails__warehouse-addressContactWrap-contact">
            <div className="LocationsDetails__warehouse-addressContactWrap-contact-title">
              CONTACT
            </div>
            <div className="LocationsDetails__warehouse-addressContactWrap-contact-line1">
              Mara Weinberg
            </div>
            <div className="LocationsDetails__warehouse-addressContactWrap-contact-line2">
              Warehouse Manager
            </div>

            <br />
            <div className="LocationsDetails__warehouse-addressContactWrap-contact-line3">
              +1 416 678 2345
            </div>
            <div className="LocationsDetails__warehouse-addressContactWrap-contact-line4">
              weinberg@instock.com
            </div>
          </div>
        </div>
      </div>
      <div className="LocationsDetails__bottom">
        <div className="LocationsDetails__bottom-wrap">
          <div className="LocationsDetails__bottom-wrap-top">
            <div className="LocationsDetails__bottom-wrap-top-product">
              <div className="LocationsDetails__bottom-wrap-top-product-title">
                ITEM
              </div>
              <div className="LocationsDetails__bottom-wrap-top-product-name">
                Product Name Here
              </div>
              <div className="LocationsDetails__bottom-wrap-top-product-description">
                Here is a very brief description of the product in the
                inventory…
              </div>
            </div>
            <div className="LocationsDetails__bottom-wrap-top-lastOrdered">
              <div className="LocationsDetails__bottom-wrap-top-lastOrdered-title">
                LAST ORDERED
              </div>
              <div className="LocationsDetails__bottom-wrap-top-lastOrdered-date">
                05/24/2018
              </div>
            </div>
            <div className="LocationsDetails__bottom-wrap-top-location">
              <div className="LocationsDetails__bottom-wrap-top-location-title">
                LOCATION
              </div>
              <div className="LocationsDetails__bottom-wrap-top-location-cityCountry">
                Toronto, CAN
              </div>
            </div>
            <div className="LocationsDetails__bottom-wrap-top-quantity">
              <div className="LocationsDetails__bottom-wrap-top-quantity-title">
                QUANTITY
              </div>
              <div className="LocationsDetails__bottom-wrap-top-quantity-number">
                12,000
              </div>
            </div>
            <div className="LocationsDetails__bottom-wrap-top-status">
              <div className="LocationsDetails__bottom-wrap-top-status-title">
                STATUS
              </div>
              <div className="LocationsDetails__bottom-wrap-top-status-inOut">
                In Stock
              </div>
            </div>
          </div>
        </div>
        <div className="LocationsDetails__dotsWrap">
          <img
            className="LocationsDetails__dotsWrap-img"
            src={threeDots}
            alt="three-dots"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsDetails;
