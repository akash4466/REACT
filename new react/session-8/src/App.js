import React from 'react';
import SearchBar from './components/SearchBar';
import LoginForm from './components/LoginForm';
import AddToPlaylist from './components/AddToPlaylist';
import FeedbackForm from './components/FeedbackForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Input and Focus Controls</h1>
        <p className="subtitle">
          Search inputs, authentication, playlist management, and user feedback.
        </p>
      </header>

      <div className="components-grid">
        <SearchBar />
        <LoginForm />
        <AddToPlaylist />
        <FeedbackForm />
      </div>
    </div>
  );
}

export default App;
