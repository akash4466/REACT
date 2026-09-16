import React from 'react';
import ProductCard from './components/ProductCard';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="badge">Session 3 • Props & PropTypes</div>
        <h1>React Props & Validation</h1>
        <p className="subtitle">Components with Custom Props, defaultProps, and PropTypes Validation</p>
      </header>

      {/* Task 1 & 4: ProductCard Component with PropTypes */}
      <section className="section">
        <h2>1. ProductCard with PropTypes Validation (string & number)</h2>
        <div className="cards-grid">
          <ProductCard
            productName="Sony WH-1000XM5 Wireless Headphones"
            price={29990}
          />
          <ProductCard
            productName="Apple Watch Series 9 GPS"
            price={41900}
          />
          <ProductCard
            productName="Mechanical Gaming Keyboard RGB"
            price={6499}
          />
        </div>
      </section>

      {/* Task 2 & 3: UserProfile Component with defaultProps */}
      <section className="section">
        <h2>2. UserProfile Cards with defaultProps Fallbacks</h2>
        <div className="cards-grid">
          {/* Card 1: All props explicitly passed */}
          <div className="demo-case">
            <span className="case-title">Case A: All Props Provided</span>
            <UserProfile
              username="tech_enthusiast"
              followers={12450}
              profilePic="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
            />
          </div>

          {/* Card 2: followers and profilePic omitted to test defaultProps (0 followers, default pic) */}
          <div className="demo-case">
            <span className="case-title">Case B: Using defaultProps (0 followers & fallback pic)</span>
            <UserProfile
              username="new_user_joined"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
