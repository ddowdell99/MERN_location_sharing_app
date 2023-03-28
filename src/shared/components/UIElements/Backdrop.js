import React from "react";
import { createPortal } from "react-dom";

import "./Backdrop.css";

const Backdrop = ({ closeDrawer }) => {
  const content = <div className="backdrop" onClick={closeDrawer}></div>;

  return createPortal(content, document.getElementById("backdrop-hook"));
};

export default Backdrop;
