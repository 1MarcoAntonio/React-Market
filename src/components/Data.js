import api, { url } from "../data/api";
import { useEffect, useState } from "react";
import "./Data.css";

export default function Data() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get(url).then((res) => setProduct([...res.data.products]));
  }, []);
  return (
    <div className="container-grid">
      {product.map((p) => {
        return <div></div>;
      })}
    </div>
  );
}
