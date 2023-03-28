import React, { useState } from "react";
import Banner from "./Banner";
import "./Products.css";
import buy from "../assets/buy.png";
const Products = (props) => {
  return (
    <div className="container-grid">
      {props.productData.map((p) => {
        return (
          <div className="product">
            <div className="thumb-div">
              <img className="thumb" src={p.thumbnail} alt="thumbnail" />
            </div>
            <p>{p.description}</p>
            <button className="buy-button">
              <img className="buy-img" src={buy} alt={"buy button"} />
            </button>
          </div>
        );
      })}
      <Banner />
    </div>
  );
};

export default Products;
