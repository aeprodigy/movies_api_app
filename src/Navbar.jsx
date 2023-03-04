import React from "react";
import "./Navbar/Navbar.css";
const Navbar = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <h3 className="logo">|TheCream Joint|</h3>
          <div className="menu">
            <ul>
              <li>About us</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
