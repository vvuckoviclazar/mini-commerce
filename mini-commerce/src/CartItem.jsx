function CartItem({ name, description, price, amount }) {
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
          <span className="amount-input">{amount}</span>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
