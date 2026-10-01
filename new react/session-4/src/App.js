import React from 'react';
import LikeButton from './components/LikeButton';
import CartItem from './components/CartItem';
import SongVote from './components/SongVote';
import RatingSelector from './components/RatingSelector';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="badge">Session 4 • State & useState Hook</div>
        <h1>React State Management</h1>
        <p className="subtitle">Managing dynamic UI updates using the useState Hook</p>
      </header>

      <div className="interactive-grid">
        <LikeButton />
        <CartItem />
        <SongVote />
        <RatingSelector />
      </div>
    </div>
  );
}

export default App;
