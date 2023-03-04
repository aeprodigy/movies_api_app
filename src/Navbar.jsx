import React from "react";
import "./Navbar/Navbar.css";
import {FcFilmReel} from 'react-icons/fc';
const Navbar = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <h3 className="logo">
            |<FcFilmReel />
            MovieZ<span className="txt">PLace</span>|
          </h3>
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
