function Li({ id, name, description, price }) {
  return (
    <li>
      <div key={id} className="title-div">
        <h1>{name}</h1>
        <p className="description-p">{description}</p>
        <p className="price-p">{price}$</p>
      </div>
      <div className="amount-div">
        <div className="input-div">
          <label className="amount-label" htmlFor="amount-input">
            Amount
          </label>
          <input
            className="amount-input"
            type="number"
            min={1}
            max={99}
            value={1}
          />
        </div>
        <button className="add-btn">+ADD</button>
      </div>
    </li>
  );
}

export default Li;
