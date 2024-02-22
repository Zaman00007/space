import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="" className="w-10" />
            <span>CosmoCast</span>
          </div>
          <div className="text-white">
            <ul className="flex items-center gap-6 text-xl py-4">
              <li>
                <a href="#">Weather</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#">Galaxy</a>
              </li>
              <li>
                <a href="#">Satelite Data</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="dropdown">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full dropdown-toggle"
                onClick={toggleDropdown}
              >
                Earth
              </button>
              {isOpen && (
                <div className="dropdown-menu">
                  <Link to="/Mars">Mars</Link>
                  <Link to="/Jupiter">Jupiter</Link>
                  <Link to="/Saturn">Saturn</Link>
                  <Link to="/Neptune">Uranus</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
