import React from 'react';
import TrendingMovies from './components/TrendingMovies';
import AddPlaylist from './components/AddPlaylist';
import RestaurantSearch from './components/RestaurantSearch';
import CommentForm from './components/CommentForm';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Media and Content Explorer</h1>
        <p className="subtitle">
          Movies, playlists, local restaurants, and community feedback.
        </p>
      </header>

      <main className="components-grid">
        <TrendingMovies />
        <AddPlaylist />
        <RestaurantSearch />
        <CommentForm />
      </main>

      <footer className="app-footer">
        <p>© 2026 Content Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
