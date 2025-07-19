import { useState } from "react";

function Li({ id, name, description, price, onAddToCart }) {
  const [amount, setAmount] = useState(1);

  function handleAdd() {
    onAddToCart({ id, name, description, price, amount: +amount });
  }

  return (
    <li>
      <div className="title-div">
        <h1>{name}</h1>
        <p className="description-p">{description}</p>
        <p className="price-p">{price}$</p>
      </div>
      <div className="amount-div">
        <div className="input-div">
          <label className="amount-label">Amount</label>
          <input
            className="amount-input"
            type="number"
            min={1}
            max={99}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="add-btn" onClick={handleAdd}>
          +ADD
        </button>
      </div>
    </li>
  );
}

export default Li;
