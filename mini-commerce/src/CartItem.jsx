function CartItem({
  name,
  description,
  price,
  amount,
  onIncrease,
  onDecrease,
}) {
  function handleIncrease() {
    onIncrease();
  }

  function handleDecrease() {
    onDecrease();
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
          <button className="decrease" onClick={onDecrease}>
            -
          </button>
          <span className="amount-span">{amount}</span>
          <button className="increase" onClick={onIncrease}>
            +
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
