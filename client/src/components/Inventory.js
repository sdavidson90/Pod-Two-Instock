import React from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Icons/SVG/Icon-search.svg";
import plus from "../assets/Icons/SVG/Icon-add.svg";
import kebab from "../assets/Icons/SVG/Icon-kebab-default.svg";

const Inventory = ({ inventoryItem }) => {
  // const invArr = inventoryItem.map((object, index) => {
  //   return <Link className="video__container">Product Name Here</Link>;
  // });
  return (
    <div className="inventory">
      <button className="inventory__add">
        <img src={plus} alt="add item" className="inventory__add-icon" />
      </button>
      <h1 className="inventory__title">Inventory</h1>
      <form className="inventory__search">
        <input
          className="inventory__search-image"
          type="image"
          src={Search}
          alt="search"
        />
        <input
          className="inventory__search-bar"
          name="search"
          placeholder="Search"
          autoComplete="off"
        />
      </form>
      <div className="inventory__tablet">
        <label>ITEM</label>
        <label className="inventory__tablet-spacing">LAST ORDERED</label>
        <label>LOCATION</label>
        <label>QUANTITY</label>
        <label>STATUS</label>
      </div>
      {/* {invArr} */}
      <div className="inventory__container">
        <div className="inventory__flex">
          {/* THIS DIV ABOVE GOES TO THE MAP FUNCTION ABOVE WHEN BACKEND IS DONEZO */}
          {/* LABEL IS HARD CODED AND P TAGS ARE NOT */}
          <label className="inventory__product-margin inventory__mobile">
            ITEM
          </label>
          <div className="inventory__tablet-product">
            <Link className="inventory__product">Product Name Here</Link>
            <p>
              Here is a very brief description of the product in the inventory…
            </p>
          </div>
          <label className="inventory__mobile">LAST ORDERED</label>
          <p>05/24/2018</p>
          <label className="inventory__mobile">LOCATION</label>
          <p>Toronto, CAN</p>
          <label className="inventory__mobile">QUANTITY</label>
          <p>12,000</p>
          <label className="inventory__mobile">STATUS</label>
          <p>In Stock</p>
        </div>
        <div className="inventory__options">
          <img src={kebab} alt="remove" />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
