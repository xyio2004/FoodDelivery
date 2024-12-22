import React, { useState } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="relative">
      <div className="sticky top-0 z-[10]">
        <Navbar setShowLogin={setShowLogin}></Navbar>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
