import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Nothing Phone (2a) 5G (Black, 128GB)', price: 23999, original: 25999, qty: 1 },
    { id: 2, name: 'Sony WH-1000XM5 ANC Headphones', price: 26990, original: 34990, qty: 1 },
    { id: 3, name: 'JBL Cinema SB271 220W Dolby Soundbar', price: 8999, original: 16999, qty: 1 }
  ]);

  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev
        .map(item => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter(item => item.qty > 0)
    );
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalMrp = cartItems.reduce((acc, item) => acc + item.original * item.qty, 0);
  const totalSavings = totalMrp - totalAmount;

  return (
    <div className="page-container">
      <div className="cart-header">
        <h2>My Shopping Cart ({cartItems.length} Items)</h2>
        <span className="cart-delivery-pin">Deliver to: <strong>Mumbai - 400001</strong></span>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty-card">
          <h3>Your cart is empty</h3>
          <p>Explore our deals and add items to your cart.</p>
          <Link to="/deals" className="btn-primary-fk">
            Browse Deals Now
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items-column">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-card">
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.name}</h4>
                  <div className="cart-item-price-row">
                    <span className="cart-item-price">Rs. {item.price.toLocaleString('en-IN')}</span>
                    <span className="cart-item-mrp">Rs. {item.original.toLocaleString('en-IN')}</span>
                    <span className="cart-item-saved">
                      Save Rs. {((item.original - item.price) * item.qty).toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="cart-qty-controls">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQty(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="qty-val">{item.qty}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => updateQty(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() => setCartItems(prev => prev.filter(i => i.id !== item.id))}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary-sidebar">
            <h3 className="summary-title">PRICE DETAILS</h3>
            <div className="summary-row">
              <span>Price ({cartItems.length} items)</span>
              <span>Rs. {totalMrp.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-row green-text">
              <span>Discount</span>
              <span>- Rs. {totalSavings.toLocaleString('en-IN')}</span>
            </div>
            <div className="summary-row green-text">
              <span>Delivery Charges</span>
              <span>FREE</span>
            </div>
            <div className="summary-total-divider"></div>
            <div className="summary-row total-row">
              <span>Total Amount</span>
              <span>Rs. {totalAmount.toLocaleString('en-IN')}</span>
            </div>
            <p className="summary-savings-note">
              You will save Rs. {totalSavings.toLocaleString('en-IN')} on this order.
            </p>
            <button
              type="button"
              className="place-order-btn"
              onClick={() => alert(`Order placed successfully for Rs. ${totalAmount.toLocaleString('en-IN')}!`)}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
