import React from "react";

import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="" className="w-10" />
            <span>S-EX</span>
          </div>
          <div className="text-white ">
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
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
