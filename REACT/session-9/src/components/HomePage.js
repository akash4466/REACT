import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const categories = [
    { id: 1, name: 'Mobiles', desc: 'From Rs. 7,999' },
    { id: 2, name: 'Electronics', desc: 'Up to 70% Off' },
    { id: 3, name: 'Fashion', desc: 'Min. 50% Off' },
    { id: 4, name: 'Appliances', desc: 'Special Discounts' },
    { id: 5, name: 'Home and Kitchen', desc: 'Best Sellers' },
    { id: 6, name: 'Beauty and Toys', desc: 'From Rs. 199' }
  ];

  const featuredProducts = [
    { id: 101, title: 'Nothing Phone (2a) 5G', price: 'Rs. 23,999', original: 'Rs. 25,999', rating: '4.5', tag: 'Best Seller' },
    { id: 102, title: 'Sony WH-1000XM5 ANC', price: 'Rs. 26,990', original: 'Rs. 34,990', rating: '4.8', tag: 'Top Rated' },
    { id: 103, title: 'MacBook Air M2 13-inch', price: 'Rs. 84,990', original: 'Rs. 99,900', rating: '4.9', tag: 'Special Price' },
    { id: 104, title: 'Apple Watch Series 9', price: 'Rs. 34,999', original: 'Rs. 41,900', rating: '4.7', tag: 'Popular' }
  ];

  return (
    <div className="page-container">
      <section className="fk-hero-banner">
        <div className="hero-content">
          <span className="hero-tag">FEATURED SALE</span>
          <h2>Top Electronics and Gadgets</h2>
          <p>Offers on flagships, laptops, and premium accessories.</p>
          <div className="hero-actions">
            <Link to="/deals" className="btn-primary-fk">
              Explore Today's Deals
            </Link>
            <Link to="/cart" className="btn-secondary-fk">
              View Your Cart (3)
            </Link>
          </div>
        </div>
      </section>

      <section className="category-section">
        <h3 className="section-title">Shop by Category</h3>
        <div className="category-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <span className="category-name">{cat.name}</span>
              <span className="category-sub">{cat.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="section-header-row">
          <h3 className="section-title">Trending Deals</h3>
          <Link to="/deals" className="view-all-link">View All Deals</Link>
        </div>
        <div className="products-grid">
          {featuredProducts.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-badge">{p.tag}</div>
              <h4 className="product-title">{p.title}</h4>
              <div className="product-rating">{p.rating} / 5</div>
              <div className="product-pricing">
                <span className="price-current">{p.price}</span>
                <span className="price-orig">{p.original}</span>
              </div>
              <Link to="/cart" className="add-cart-btn">Add to Cart</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
