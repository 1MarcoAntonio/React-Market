import { useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  useEffect(() => {
    const products = async () => {
      await fetch("https://dummyjson.com/products/")
        .then((res) => res.json())
        .then((res) => console.log(res));
    };
    products();
  }, []);
  return <div></div>;
};

export default Banner;
