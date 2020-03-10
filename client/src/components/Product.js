import React, { Component } from "react";
import axios from "axios";

export default class Product extends Component {
  componentDidMount() {
    // const prodId = match.params.id;
    axios.get(`/api/`).then(response => {
      console.log(response.data[0].inventory);
      // get active inventory id then look for product id

      this.setState({ instock: response.data, loading: false });
    });
  }
  render() {
    const { inventory } = this.state.instock;
    return this.state.loading && this.state.instock !== undefined ? (
      <h1>Loading..</h1>
    ) : (
      <div className="product">
        {/* <div>{inventory.description}</div> */}
        {/* <div className="product__container" id={this.state.instock.productId}>
          <div className="product__header">
            <h1 className="product__label-page">
              {this.state.instock[0].productName}
            </h1>
            <div className="product__instock-notifier">
              <p className="product__instock-notifier-text">In Stock</p>
            </div>
          </div>
          <hr className="product__hr"></hr>

          <div className="product__description-details-container">
            <div className="product__description-container">
              <h4 className="product__label-description">ITEM DESCRIPTION</h4>
              <p className="product__item-description">
                {this.state.instock[0].inventory[0].description}
              </p>
            </div>
            <div className="product__details-container">
              <div className="product__info-details">
                <div className="product__label-value-container">
                  <h4 className="product__label-ordered-by">ORDERED BY</h4>
                  <p className="product__ordered-by">
                    {
                      this.state.instock[0].inventory[0].orderHistory[0]
                        .orderedBy
                    }
                  </p>
                </div>
                <div className="product__label-value-container">
                  <h4 className="product__label-ref-num">REFERENCE NUMBER</h4>
                  <p className="product__ref-num">
                    {
                      this.state.instock[0].inventory[0].orderHistory[0]
                        .reference
                    }
                  </p>
                </div>
              </div>

              <div className="product__info-details">
                <div className="product__label-value-container">
                  <h4 className="product__label-last-ordered">LAST ORDERED</h4>
                  <p className="product__last-ordered">
                    {this.state.instock[0].inventory[0].lastOrdered}
                  </p>
                </div>
                <div className="product__label-value-container">
                  <h4 className="product__label-location">LOCATION</h4>
                  <p className="product__location">
                    {this.state.instock[0].inventory[0].location}
                  </p>
                </div>
              </div>

              <h4 className="product__label-quantity">QUANTITY</h4>
              <p className="product__quantity">
                {this.state.instock[0].inventory[0].quantity}
              </p>

              <h4 className="product__label-categories">CATEGORIES</h4>
              <p className="product__categories">
                {this.state.instock[0].inventory[0].categories}
              </p>
            </div>
          </div>
          <hr className="product__hr"></hr>
          <div className="product__btn-container">
            <button className="product__edit-btn">EDIT</button>
          </div>
        </div> */}
      </div>
    );
  }
}
