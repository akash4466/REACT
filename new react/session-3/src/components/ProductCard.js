import React from 'react';
import PropTypes from 'prop-types';

// Task 1: ProductCard accepts productName and price, and displays them in a styled div.
// Task 4: Prop type validation using prop-types: productName is string, price is number.
function ProductCard({ productName, price }) {
  return (
    <div className="product-card">
      <div className="product-badge">Best Seller</div>
      <div className="product-icon">📦</div>
      <h3 className="product-name">{productName}</h3>
      <div className="product-pricing">
        <span className="currency">₹</span>
        <span className="price-amount">{price.toLocaleString()}</span>
      </div>
      <button className="add-cart-btn">Add to Cart</button>
    </div>
  );
}

// Task 4: PropTypes validation
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductCard;
