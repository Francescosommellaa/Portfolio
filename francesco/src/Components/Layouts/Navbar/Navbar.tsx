import React from "react";

// SCSS
import "./Navbar.scss";

// Molecules
import Sidebar from "../Sidebar/Sidebar";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2> Navbar</h2>

      <Sidebar />
    </nav>
  );
};

export default Navbar;
