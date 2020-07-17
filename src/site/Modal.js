import React from "react";

import ModalContent from "./ModalContent";

const Modal = (props) => {
  return (
    <div id={props.id} className="modal">
      <ModalContent id={props.id} />
      <div className="modal-footer center">
        <a href="#!" className="modal-close">
          <i className="material-icons black-text">close</i>
        </a>
      </div>
    </div>
  );
};

export default Modal;
