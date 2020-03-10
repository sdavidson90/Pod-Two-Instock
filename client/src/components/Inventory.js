import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Icons/SVG/Icon-search.svg";
import kebab from "../assets/Icons/SVG/Icon-kebab-default.svg";
import Addbutton from "./Addbutton";
import axios from "axios";

export default class Inventory extends Component {
  state = {
    instock: "",
    loading: true
  };

  componentDidMount() {
    axios.get("/api/").then(res => {
      let instock = res.data;
      this.setState({ instock, loading: false });
    });
  }
  render() {
    return this.state.loading && this.state.instock !== undefined ? (
      <h1>Loading..</h1>
    ) : (
      <div className="inventory">
        <div className="inventory__top-flex">
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
        </div>
        <div className="inventory__tablet">
          <label className="inventory__tablet-item">ITEM</label>
          <div className="inventory__tablet-stats">
            <label className="inventory__tablet-right">LAST ORDERED</label>
            <label className="inventory__tablet-right">LOCATION</label>
            <label className="inventory__tablet-right">QUANTITY</label>
            <label className="inventory__tablet-right inventory__tablet-spacing">
              STATUS
            </label>
          </div>
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
              <Link to="/product" className="inventory__product">
                {this.state.instock[0].inventory[0].productName}
              </Link>
              <p className="inventory__shrink">
                {this.state.instock[0].inventory[0].description}
              </p>
            </div>
            <div className="inventory__tablet-stats">
              <label className="inventory__mobile">LAST ORDERED</label>
              <p className="inventory__tablet-right">
                {this.state.instock[0].inventory[0].lastOrdered}
              </p>
              <label className="inventory__mobile">LOCATION</label>
              <p className="inventory__tablet-right">
                {this.state.instock[0].inventory[0].location}
              </p>
              <label className="inventory__mobile">QUANTITY</label>
              <p className="inventory__tablet-right">
                {this.state.instock[0].inventory[0].quantity}
              </p>
              <label className="inventory__mobile">STATUS</label>
              <p className="inventory__tablet-right kebab">In Stock</p>
            </div>
          </div>
          <div className="inventory__options">
            <img src={kebab} alt="options" />
          </div>
        </div>
        <Addbutton />
      </div>
    );
  }
}
