import React, { useRef, useState } from "react";
import Banner from "./Banner";
import "./Products.css";
import buy from "../assets/buy.png";
const Products = (props) => {
  const minhaImgRef = useRef(null);
  const [imagem, setImagem] = useState(null);

  function handleClick() {
    const img = minhaImgRef.current;
    setImagem(img);
  }

  return (
    <div className="container-grid">
      {props.productData.map((p) => {
        return (
          <div className="product">
            <div className="thumb-div">
              <img ref={minhaImgRef} className="thumb" src={p.thumbnail} alt="thumbnail" />
            </div>
            <p>{p.description}</p>
            <button onClick={handleClick} className="buy-button">
              <img className="buy-img" src={buy} alt={"buy button"} />
            </button>
          </div>
        );
      })}
      <Banner thumb={imagem} />
    </div>
  );
};

export default Products;
