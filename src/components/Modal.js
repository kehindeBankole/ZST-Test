import React from "react";
import "./Modal.scss";

function Modal(props) {
  return (
    <div className="modal" onClick={props.close}>
      <div className="box">{props.modalmessage}</div>
    </div>
  );
}

export default Modal;
