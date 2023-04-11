import React, { useState } from "react";
import Banner from "./Banner";
import "./Products.css";
import buy from "../assets/buy.png";
const Products = (props) => {




  const buyHandler = (id) => {

    props.onAdd(id);
  };



  return (
    <div className="container-grid">
      {props.productData.map((p) => {
        return (
          <div key={p.id} className="product">
            <div className="thumb-div">
              <img className="thumb" src={p.thumbnail} alt="thumbnail" />
            </div>
            <p>{p.description}</p>
            <button
              onClick={() => buyHandler(p.id)}
              className="buy-button"
            >
              <img className="buy-img" src={buy} alt={"buy button"} />
            </button>
          </div>
        );
      })}
      <Banner menuHandler={props.sideMenuHandler} />
    </div>
  );
};

export default Products;
