import React, { useState } from 'react';
import Playlist from './components/Playlist';
import OrderStatus from './components/OrderStatus';
import FollowerList from './components/FollowerList';
import CartSummary from './components/CartSummary';
import './App.css';

function App() {
  // Sample Data for Task 1: Playlist
  const initialSongs = [
    { id: 1, title: 'Calm Down', artist: 'Rema & Selena Gomez' },
    { id: 2, title: 'Starboy', artist: 'The Weeknd ft. Daft Punk' },
    { id: 3, title: 'Shape of You', artist: 'Ed Sheeran' },
    { id: 4, title: 'As It Was', artist: 'Harry Styles' }
  ];

  // Interactive state for Task 2: OrderStatus
  const [isDelivered, setIsDelivered] = useState(false);

  // Interactive state for Task 3: FollowerList
  const [showEmptyFollowers, setShowEmptyFollowers] = useState(false);
  const populatedFollowers = ['sundarpichai', 'elonmusk', 'satyanadella', 'lexfridman'];

  // Interactive state for Task 4: CartSummary
  const [cartItemCount, setCartItemCount] = useState(3);
  const fullCartItems = [
    { id: 1, name: 'Wireless Ergonomic Mouse', price: 1499 },
    { id: 2, name: 'Mechanical Keychron Keyboard', price: 6999 },
    { id: 3, name: 'USB-C Fast Charging Hub', price: 2199 },
    { id: 4, name: 'Desk Anti-Glare Light Bar', price: 3499 }
  ];

  const currentCartItems = fullCartItems.slice(0, cartItemCount);

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="badge">Session 6 • Conditional Rendering & Lists</div>
        <h1>React Lists & Conditional UI</h1>
        <p className="subtitle">
          Using map() to render arrays, ternary operators, empty state handling, and conditional buttons
        </p>
      </header>

      {/* Interactive Controls Bar for live testing */}
      <div className="testing-controls-bar">
        <span className="controls-label">Interactive Testing Controls:</span>
        <div className="controls-group">
          <button
            className="ctrl-btn"
            onClick={() => setIsDelivered(prev => !prev)}
          >
            Toggle Delivery Status ({isDelivered ? 'Delivered' : 'On the way'})
          </button>
          <button
            className="ctrl-btn"
            onClick={() => setShowEmptyFollowers(prev => !prev)}
          >
            Toggle Followers ({showEmptyFollowers ? 'Empty State' : 'Populated List'})
          </button>
          <div className="cart-selector">
            <span>Cart Items:</span>
            {[0, 2, 3, 4].map(num => (
              <button
                key={num}
                className={`ctrl-pill-btn ${cartItemCount === num ? 'active' : ''}`}
                onClick={() => setCartItemCount(num)}
              >
                {num} items {num >= 3 ? '(Unlocked)' : ''}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="components-grid">
        {/* Task 1: Playlist with map() */}
        <Playlist songs={initialSongs} />

        {/* Task 2: OrderStatus with ternary operator */}
        <OrderStatus isDelivered={isDelivered} orderId="ZOM-992381" />

        {/* Task 3: FollowerList with conditional check */}
        <FollowerList followers={showEmptyFollowers ? [] : populatedFollowers} />

        {/* Task 4: CartSummary with map(), empty check, and conditional checkout button */}
        <CartSummary items={currentCartItems} />
      </div>
    </div>
  );
}

export default App;
