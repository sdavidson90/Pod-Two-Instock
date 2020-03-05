import React from "react";
import { Link } from "react-router-dom";
import Search from "../assets/Icons/SVG/Icon-search.svg";
import plus from "../assets/Icons/SVG/Icon-add.svg";
import kebab from "../assets/Icons/SVG/Icon-kebab-default.svg";
import Modal from "react-modal";
import Invmodal from "./Modal";

const Inventory = ({ inventoryItem }) => {
  // const invArr = inventoryItem.map((object, index) => {
  //   return <Link className="video__container">Product Name Here</Link>;
  // });
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

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
      {/* {invArr} */}
      <div className="inventory__container">
        <div className="inventory__flex">
          {/* THIS DIV ABOVE GOES TO THE MAP FUNCTION ABOVE WHEN BACKEND IS DONEZO */}
          {/* LABEL IS HARD CODED AND P TAGS ARE NOT */}
          <label className="inventory__product-margin inventory__mobile">
            ITEM
          </label>
          <div className="inventory__tablet-product">
            <Link to="/product" className="inventory__product">Product Name Here</Link>
            <p className="inventory__shrink">
              Here is a very brief description of the product in the
              inventory…Here is a very brief description of the product in the
              inventory…Here is a very brief description of the product in the
              inventory…
            </p>
          </div>
          <div className="inventory__tablet-stats">
            <label className="inventory__mobile">LAST ORDERED</label>
            <p className="inventory__tablet-right">05/24/2018</p>
            <label className="inventory__mobile">LOCATION</label>
            <p className="inventory__tablet-right">Toronto, CAN</p>
            <label className="inventory__mobile">QUANTITY</label>
            <p className="inventory__tablet-right">12,000</p>
            <label className="inventory__mobile">STATUS</label>
            <p className="inventory__tablet-right kebab">In Stock</p>
          </div>
        </div>
        <div className="inventory__options">
          <img src={kebab} alt="remove" />
        </div>
      </div>
      <button className="inventory__add" onClick={openModal}>
        <img src={plus} alt="add item" className="inventory__add-icon" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Invmodal />
      </Modal>
    </div>
  );
};

export default Inventory;
