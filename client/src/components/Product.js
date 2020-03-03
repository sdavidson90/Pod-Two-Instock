import React, { Component } from "react";
import axios from "axios";

export default class Product extends Component {
  state = {
    product: "",
    loading: true
  };

  componentDidMount() {
    axios.get(`/product/`).then(response => {
      this.setState({
        product: response.data,
        loading: false
      });
      console.log(response.data);
    });
  }

  // things to do: back-end is filtering product IDs so will only be
  // passing one object. map functionality would not be needed for
  // the front-end. code below can be reused for items page where
  // where all products are shown.

  render() {
    return this.state.loading ? (
      <h1>Loading..</h1>
    ) : (
      <div className="product">
        <div className="product__container">
          <div className="product__header">
            <h1 className="product__label-page">Product Name</h1>
            <div className="product__instock-notifier">
              <p className="product__instock-notifier-text">In Stock</p>
            </div>
          </div>
          <hr className="product__hr"></hr>

          {this.state.product.map(item => {
            return (
              <div className="product__description-details-container">
                <div className="product__description-container">
                  <h4 className="product__label-description">
                    ITEM DESCRIPTION
                  </h4>
                  <p className="product__item-description">
                    {item.description}
                  </p>
                </div>
                <div className="product__details-container">
                  <div className="product__info-details">
                    <div className="product__label-value-container">
                      <h4 className="product__label-ordered-by">ORDERED BY</h4>
                      <p className="product__ordered-by">{item.ordered}</p>
                    </div>
                    <div className="product__label-value-container">
                      <h4 className="product__label-ref-num">
                        REFERENCE NUMBER
                      </h4>
                      <p className="product__ref-num">{item.reference}</p>
                    </div>
                  </div>

                  <div className="product__info-details">
                    <div className="product__label-value-container">
                      <h4 className="product__label-last-ordered">
                        LAST ORDERED
                      </h4>
                      <p className="product__last-ordered">{item.last}</p>
                    </div>
                    <div className="product__label-value-container">
                      <h4 className="product__label-location">LOCATION</h4>
                      <p className="product__location">{item.location}</p>
                    </div>
                  </div>

                  <h4 className="product__label-quantity">QUANTITY</h4>
                  <p className="product__quantity">{item.quantity}</p>

                  <h4 className="product__label-categories">CATEGORIES</h4>
                  <p className="product__categories">{item.categories}</p>
                </div>
              </div>
            );
          })}
          <hr className="product__hr"></hr>
          <div className="product__btn-container">
            <button className="product__edit-btn">EDIT</button>
          </div>
        </div>
      </div>
    );
  }
}
