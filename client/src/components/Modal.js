import React, { Component } from "react";
import Switch from "react-switch";
//CHANGE THE WIDTH FOR MOBILE BEFORE FINISH
class Modal extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="modal">
        <div className="new">
          <h1 className="new__title">Create New</h1>
          <form className="new__form">
            <div className="new__form-flex">
              <label>PRODUCT</label>
              <input
                className="new__form-input"
                name="product"
                placeholder="Item Name"
                autoComplete="off"
              />
            </div>
            <div className="new__form-flex margin">
              <label>LAST ORDERED</label>
              <input
                className="new__form-input"
                name="date"
                placeholder="yyyy-mm-dd"
                autoComplete="off"
              />
            </div>
            <div className="new__form-flex">
              <label>CITY</label>
              <input
                className="new__form-input"
                name="city"
                placeholder="City"
                autoComplete="off"
              />
            </div>
            <div className="new__form-flex margin">
              <label>COUNTRY</label>
              <select name="country" className="new__form-input">
                <option>Canada</option>
                <option>United States</option>
                <option>Liechtenstein</option>
              </select>
            </div>
            <div className="new__form-flex">
              <label>QUANTITY</label>
              <input
                className="new__form-input"
                name="quantity"
                placeholder="0"
                autoComplete="off"
              />
            </div>
            <label className="new__form-switch margin">
              <label className="new__form-status">STATUS</label>
              <div className="new__form-switch-flex">
                <span className="new__form-switch-stock">In Stock</span>
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  onColor="#66CD00"
                  onHandleColor="#FFFFFF"
                  handleDiameter={24}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={24}
                  width={40}
                  className="react-switch"
                  id="material-switch"
                />
              </div>
            </label>
            <div className="new__form-flex">
              <label>ITEM DESCRIPTION</label>
              <textarea
                className="new__form-description"
                name="description"
                rows="10"
                cols="50"
                placeholder="(Optional)"
              ></textarea>
            </div>
            <div className="button__container">
              <button className="button__save">SAVE</button>
              <button className="button__cancel">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
