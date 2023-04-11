import React, { useState } from "react";

import "./Banner.css";
import cart from "../assets/cart.png";

const Banner = (props) => {



  return (
    <>

      <div>
        <div className="banner">
          <button onClick={props.menuHandler} className="cart-button">
            <img className="cart-img" src={cart} alt={"cart-img"} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
