import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./Modal.css";

const ModalOverlay = ({
  className,
  style,
  headerClass,
  header,
  onSubmit,
  contentClass,
  children,
  footerClass,
  footer,
}) => {
  const content = (
    // adding the literal here gives us the chance to include other classNames/css styling depending on where we are using modal
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );
  return createPortal(content, document.getElementById("modal-hook"));
};

const Modal = ({
  onCancel,
  show,
  header,
  contentClass,
  footerClass,
  footer,
}) => {
  return (
    <React.Fragment>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        {/* Whatever props are passed to the parent are passed to the child with ..props */}
        <ModalOverlay
          header={header}
          contentClass={contentClass}
          footerClass={footerClass}
          footer={footer}
        />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
