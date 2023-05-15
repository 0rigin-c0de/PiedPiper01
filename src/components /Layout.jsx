import React from "react";
import MobileFooter from "./Mobile+Desktop(Navbar)/MobileFooter";
import SidebarMobile from "./Mobile+Desktop(Navbar)/SidebarMobile";

const Layout = ({ children }) => {
  return (
    <div>
      <SidebarMobile />
      {children}
      <MobileFooter />
    </div>
  );
};

export default Layout;
