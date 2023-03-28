import React from "react";
import { createPortal } from "react-dom";

import "./SideDrawer.css";

const SideDrawer = ( {children} ) => {
    const content = <aside className="side-drawer">{children}</aside>;
    // Portal are used to render certain content or elements in specific locations on index file
    return createPortal(content, document.getElementById('drawer-hook'))
};

export default SideDrawer;
