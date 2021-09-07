import React from 'react';
import './Modal.css';

const Modal = ({ handleClose, show, children, close=true}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName} onClick={()=>{show=false}}>
              <div className="modal-main">
                <button className="close-modal" type="button" onClick={handleClose} style={{display:`${close?"":"none"}`}}>
                        x
                </button>
                  {children}
                  
              </div>
      </div>
    );
  };
  
  export default Modal;