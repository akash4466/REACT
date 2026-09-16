import React from 'react';

// Task 4: CartSummary taking array of cart items (name and price);
// Uses map() to display items, shows 'Cart is empty' if no items,
// and shows 'Checkout Now' button ONLY if there are 3 or more items.
function CartSummary({ items = [] }) {
  const totalAmount = items.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="card-box cart-summary-box">
      <div className="box-header">
        <span className="pill">Task 4</span>
        <h3>Cart Summary</h3>
      </div>
      <p className="box-desc">
        Renders items using map(); shows 'Cart is empty' when empty; conditional 'Checkout Now' button if ≥ 3 items.
      </p>

      {items.length === 0 ? (
        <div className="empty-cart-view">
          <span className="cart-icon-empty">🛒</span>
          <p className="empty-cart-msg">Cart is empty</p>
          <span className="empty-cart-sub">Add items to view breakdown and checkout</span>
        </div>
      ) : (
        <div className="cart-populated-view">
          <ul className="cart-items-list">
            {items.map((item, index) => (
              <li key={item.id || index} className="cart-item-row">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">₹{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>

          <div className="cart-total-row">
            <span>Total ({items.length} items):</span>
            <strong>₹{totalAmount.toLocaleString()}</strong>
          </div>

          {/* Conditional Checkout Button: Only appears if there are 3 or more items */}
          {items.length >= 3 ? (
            <button
              className="checkout-btn active-checkout"
              onClick={() => alert(`Proceeding to checkout with ${items.length} items! Total: ₹${totalAmount.toLocaleString()}`)}
            >
              Checkout Now ➔
            </button>
          ) : (
            <div className="checkout-threshold-note">
              ℹ️ Add {3 - items.length} more item{3 - items.length > 1 ? 's' : ''} to unlock the "Checkout Now" button.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartSummary;
