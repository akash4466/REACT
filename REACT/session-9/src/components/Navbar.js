import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? '#ffe500' : '#ffffff',
      backgroundColor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
      fontWeight: isActive ? '700' : '500',
      borderBottom: isActive ? '3px solid #ffe500' : '3px solid transparent',
      padding: '8px 16px',
      borderRadius: '6px 6px 0 0',
      textDecoration: 'none',
      transition: 'all 0.2s ease-in-out',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    };
  };

  return (
    <header className="fk-navbar">
      <div className="fk-navbar-container">
        <div className="fk-brand">
          <NavLink to="/" className="fk-logo-link">
            <span className="fk-brand-name">Flipkart</span>
            <span className="fk-brand-sub">
              Explore <span className="fk-plus-text">Plus</span>
            </span>
          </NavLink>
        </div>

        <div className="fk-search-wrapper">
          <input
            type="text"
            className="fk-search-input"
            placeholder="Search for products, brands and more..."
            readOnly
          />
          <button className="fk-search-btn" aria-label="Search" type="button">
            Search
          </button>
        </div>

        <nav className="fk-nav-links" aria-label="Main Navigation">
          <NavLink to="/" style={navLinkStyle} end>
            <span>Home</span>
          </NavLink>

          <NavLink to="/deals" style={navLinkStyle}>
            <span>Deals</span>
            <span className="deal-badge">Special</span>
          </NavLink>

          <NavLink to="/cart" style={navLinkStyle}>
            <span>Cart</span>
            <span className="cart-badge-count">3</span>
          </NavLink>

          <NavLink to="/support-help-center" style={navLinkStyle} title="Help Center">
            <span>Help</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
