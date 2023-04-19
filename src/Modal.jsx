import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  console.log(isModalOpen);
  return (
    <>
      <div className={`modal-overlay ${isModalOpen ? "show-modal" : ""}`}>
        <h3>Modal header</h3>
        <div className="modal-container">
          <button className="modal-close-button" onClick={closeModal}>
            <FaTimes />
          </button>
          ModalContent
        </div>
      </div>
    </>
  );
};

export default Modal;
