import React, { useState } from "react";
import Banner from "./Banner";
import "./Products.css";
import buy from "../assets/buy.png";
const Products = (props) => {
  const [thumbnail, setThumbnail] = useState();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const buyHandler = (thumb, ti, pri) => {
    setThumbnail(thumb);
    setTitle(ti);
    setPrice(pri);
  };

  return (
    <div className="container-grid">
      {props.productData.map((p) => {
        return (
          <div className="product">
            <div className="thumb-div">
              <img className="thumb" src={p.thumbnail} alt="thumbnail" />
            </div>
            <p>{p.description}</p>
            <button
              onClick={buyHandler(p.thumbnail, p.title, p.price)}
              className="buy-button"
            >
              <img className="buy-img" src={buy} alt={"buy button"} />
            </button>
          </div>
        );
      })}
      <Banner thumb={thumbnail} title={title} price={price} />
    </div>
  );
};

export default Products;
