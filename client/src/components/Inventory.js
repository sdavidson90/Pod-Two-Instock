import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Icons/SVG/Icon-search.svg";
import kebab from "../assets/Icons/SVG/Icon-kebab-default.svg";
import Addbutton from "./Addbutton";
import axios from "axios";

export default class Inventory extends Component {
  state = {
    invList: "",
    loading: true
  };

  componentDidMount() {
    axios.get("/api/").then(res => {
      let invList = res.data;
      this.setState({ invList, loading: false });
    });
  }
  render() {
    // console.log(this.state.invList);
    return (
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
        {/* {this.state.invList.map(invArr => {
          return (
            <div className="inventory__container">
              <div className="inventory__flex">
                <label className="inventory__product-margin inventory__mobile">
                  ITEM
                </label>
                <div className="inventory__tablet-product">
                  <Link to="/product" className="inventory__product">
                    {this.state.invArr[0].inventory[0].productName}
                  </Link>
                  <p className="inventory__shrink">
                    {this.state.invArr[0].inventory[0].description}
                  </p>
                </div>
                <div className="inventory__tablet-stats">
                  <label className="inventory__mobile">LAST ORDERED</label>
                  <p className="inventory__tablet-right">
                    {this.state.invArr[0].inventory[0].lastOrdered}
                  </p>
                  <label className="inventory__mobile">LOCATION</label>
                  <p className="inventory__tablet-right">
                    {this.state.invArr[0].inventory[0].location}
                  </p>
                  <label className="inventory__mobile">QUANTITY</label>
                  <p className="inventory__tablet-right">
                    {this.state.invArr[0].inventory[0].quantity}
                  </p>
                  <label className="inventory__mobile">STATUS</label>
                  <p className="inventory__tablet-right kebab">In Stock</p>
                </div>
              </div>
              <div className="inventory__options">
                <img src={kebab} alt="options" />
              </div>
            </div>
          );
        })} */}
        <Addbutton />
      </div>
    );
  }
}
