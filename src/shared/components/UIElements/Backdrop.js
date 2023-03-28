import React from "react";
import { createPortal } from "react-dom";

import "./Backdrop.css";

const Backdrop = ({ onClick }) => {
  const content = <div className="backdrop" onClick={onClick}></div>;

  return createPortal(content, document.getElementById("backdrop-hook"));
};

export default Backdrop;
