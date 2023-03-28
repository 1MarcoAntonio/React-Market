import React, { useState } from "react";

import "./Banner.css";
import cart from "../assets/cart.png";
import SideMenu from "./SideMenu";

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {isMenuOpen && <SideMenu />}
      <div>
        <div className="banner">
          <button onClick={toggleMenu} className="cart-button">
            <img className="cart-img" src={cart} alt={"cart-img"} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
