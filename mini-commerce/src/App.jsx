import { useState } from "react";
import productsData from "./data";
import "./index.css";
import Li from "./Li.jsx";
import Btn from "./btn.jsx";

function App() {
  const [products, setProducts] = useState(productsData);

  return (
    <>
      <header>
        <h1 className="mini-commerce">Mini Commerce</h1>
        <div className="cart-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="shopping-cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <span className="cart-number">0</span>
        </div>
      </header>
      <div className="search-div">
        <label className="search-label" htmlFor="search-input">
          Search product
        </label>
        <input className="search-input" type="text" />
      </div>
      <ul className="products-list">
        {products.map((product) => (
          <Li
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          ></Li>
        ))}
      </ul>
      <Btn variation="go">Go to your cart</Btn>
      <div className="total-price-div">
        <h3 className="total-text">Total price:</h3>
        <span className="total-price">0.00$</span>
      </div>
    </>
  );
}

export default App;
