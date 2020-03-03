import React from "react";
import Switch from "react-switch";
//CHANGE THE WIDTH FOR MOBILE BEFORE FINISH

const Modal = () => {
  return (
    <div className="modal">
      <div className="new">
        <h1 className="new__title">Create New</h1>
        <form className="new__form">
          <label>PRODUCT</label>
          <input
            className="new__form-input"
            name="product"
            placeholder="Item Name"
            autoComplete="off"
          />
          <label>LAST ORDERED</label>
          <input
            className="new__form-input"
            name="date"
            placeholder="yy-mm-dd"
            autoComplete="off"
          />
          <label>CITY</label>
          <input
            className="new__form-input"
            name="city"
            placeholder="City"
            autoComplete="off"
          />
          <label for="country">COUNTRY</label>
          <select name="country" className="new__form-input">
            <option>Canada</option>
            <option>United States</option>
            <option>Liechtenstein</option>
          </select>
          <label>QUANTITY</label>
          <input
            className="new__form-input"
            name="quantity"
            placeholder="0"
            autoComplete="off"
          />
          <label className="switch">
            STATUS
            <input type="checkbox" name="stock" for="switch" />
            <p>In Stock</p>
            <div className="slider round"></div>
          </label>
          <label>ITEM DESCRIPTION</label>
          <textarea
            className="new__form-description"
            name="description"
            rows="10"
            cols="50"
            placeholder="(Optional)"
          ></textarea>
          <button className="">PUBLISH</button>
          <button className="">CANCEL</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
