import "./Products.css";
import buy from "../assets/buy.png";
const Products = (props) => {
  return (
    <div className="container-grid">
      {props.productData.map((p) => {
        return (
          <div className="product">
            <div className="thumb-div">
              <img className="thumb" src={p.thumbnail} alt="Logo" />
            </div>
            <p>{p.description}</p>
            <button>
              <img className="buy-img" src={buy} alt={"buy button"} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
