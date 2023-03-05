import React from "react";
import "./Navbar/Navbar.css";
import {FcFilmReel} from 'react-icons/fc';
import {FaGlobeAfrica} from 'react-icons/fa'
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
              <li className="align">
                EN
                <FaGlobeAfrica />
              </li>
              <li>Sign in</li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
