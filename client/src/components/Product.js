import React from "react";

function Product() {
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__header">
          <h1 className="product__label-page">Product Name</h1>
          <div className="product__instock-notifier">
            <p className="product__instock-notifier-text"> In Stock</p>
          </div>
        </div>
        <hr className="product__hr"></hr>

        <div className="product__description-details-container">
          <div className="product__description-container">
            <h4 className="product__label-description">ITEM DESCRIPTION</h4>
            <p className="product__item-description">
              Here is a more detailed summary of the product name, it’s uses,
              industries and possible attributes that could be used to describe
              the product.
            </p>
          </div>
          <div className="product__details-container">
            <div className="product__info-details">
              <div className="product__label-value-container">
                <h4 className="product__label-ordered-by">ORDERED BY</h4>
                <p className="product__ordered-by">Mark Saunders</p>
              </div>
              <div className="product__label-value-container">
                <h4 className="product__label-ref-num">REFERENCE NUMBER</h4>
                <p className="product__ref-num">JK2020FD7811201</p>
              </div>
            </div>

            <div className="product__info-details">
              <div className="product__label-value-container">
                <h4 className="product__label-last-ordered">LAST ORDERED</h4>
                <p className="product__last-ordered">5/24/2018</p>
              </div>
              <div className="product__label-value-container">
                <h4 className="product__label-location">LOCATION</h4>
                <p className="product__location">Toronto, CAN</p>
              </div>
            </div>

            <h4 className="product__label-quantity">QUANTITY</h4>
            <p className="product__quantity">12000</p>

            <h4 className="product__label-categories">CATEGORIES</h4>
            <p className="product__categories">
              Industrial, Automotive, Heavy, Mechanical, Engineering,
              Transportation, Sale
            </p>
          </div>
        </div>

        <hr className="product__hr"></hr>
        <div className="product__btn-container">
          <button className="product__edit-btn">EDIT</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
