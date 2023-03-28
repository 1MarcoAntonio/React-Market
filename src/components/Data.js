import api, { url } from "../data/api";
import { useEffect, useState } from "react";
import Products from "./Products";
import "./Data.css";

export default function Data() {
  const [product, setProduct] = useState([]);

  const handleClick = (id, title, img) => {};

  useEffect(() => {
    api.get(url).then((res) => setProduct([...res.data.products]));
  }, []);
  return (
    <Products onClick={handleClick} key={product.id} productData={product} />
  );
}
