import React from "react";
import Modal from "react-modal";
import Invmodal from "./Modal";
import plus from "../assets/Icons/SVG/Icon-add.svg";

const Addbutton = () => {
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
    <div>
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

export default Addbutton;
