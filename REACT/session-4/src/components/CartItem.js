import React, { useState } from 'react';

// Task 2: Flipkart-style cart item quantity manager with '+' and '-' buttons
function CartItem({ itemName = 'Wireless Bluetooth Earbuds', initialPrice = 1499 }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="component-card cart-item-card">
      <h3>2. Flipkart Cart Quantity Manager</h3>
      <p className="card-desc">Adjust item quantity using '+' and '-' state handlers</p>

      <div className="cart-content">
        <div className="item-details">
          <span className="item-tag">Flipkart Assured</span>
          <h4 className="item-name">{itemName}</h4>
          <span className="item-price">₹{(initialPrice * quantity).toLocaleString()}</span>
        </div>

        <div className="qty-controller">
          <button
            className="qty-btn"
            onClick={decreaseQty}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="qty-display">{quantity}</span>
          <button
            className="qty-btn"
            onClick={increaseQty}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
