import React, { Fragment, useState } from 'react';

const Modal = (props) => {
  return (
    <Fragment>
      <div
        className={`modall ${props.show ? 'show' : ''}`}
        onClick={props.onClose}
      >
        <div className="modall-content" onClick={(e) => e.stopPropagation()}>
          <div className="modall-header">
            <h4 className="modall-title">{props.title}</h4>
          </div>
          <div className="modall-body">{props.children}</div>
          <div className="modall-footer">
            <button onClick={props.onClose} className="modall-submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
