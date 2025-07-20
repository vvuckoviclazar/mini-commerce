import { useState } from "react";
import productsData from "./data";
import "./index.css";
import Li from "./Li.jsx";
import Btn from "./btn.jsx";
import CartItem from "./CartItem.jsx";

function App() {
  const [products] = useState(productsData);
  const [isClicked, setIsClicked] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.amount,
    0
  );

  const increaseItemAmount = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decreaseItemAmount = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount > 0)
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (itemToAdd) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, amount: item.amount + itemToAdd.amount }
            : item
        );
      } else {
        return [...prevItems, itemToAdd];
      }
    });
  };

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
          <span className="cart-number">
            {cartItems.reduce((total, item) => total + item.amount, 0)}
          </span>
        </div>
      </header>
      {!isClicked ? (
        <>
          <div className="search-div">
            <label className="search-label" htmlFor="search-input">
              Search product
            </label>
            <input
              className="search-input"
              type="text"
              id="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <ul className="products-list">
            {filteredProducts.map((product) => (
              <Li
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                onAddToCart={handleAddToCart}
              />
            ))}
          </ul>

          <Btn variation="go" onClick={() => setIsClicked(true)}>
            Go to your cart
          </Btn>
        </>
      ) : cartItems.length === 0 ? (
        <>
          <h1 className="empty-h1">Your cart is empty...</h1>
          <Btn variation="back" onClick={() => setIsClicked(false)}>
            Back to Products
          </Btn>
        </>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                amount={item.amount}
                onIncrease={() => increaseItemAmount(item.id)}
                onDecrease={() => decreaseItemAmount(item.id)}
              />
            ))}
          </ul>
          <Btn variation="back" onClick={() => setIsClicked(false)}>
            Back to Products
          </Btn>
        </>
      )}

      <div className="total-price-div">
        <h3 className="total-text">Total price:</h3>
        <span className="total-price">{totalPrice.toFixed(2)}$</span>
      </div>
    </>
  );
}

export default App;
