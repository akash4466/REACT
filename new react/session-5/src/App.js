import React from 'react';
import LikeButton from './components/LikeButton';
import SearchBar from './components/SearchBar';
import LoginForm from './components/LoginForm';
import PlaylistAdder from './components/PlaylistAdder';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="badge">Session 5 • Forms, Events & Real-time State</div>
        <h1>React Forms & User Input</h1>
        <p className="subtitle">Real-time binding, controlled inputs, e.preventDefault(), and form reset</p>
      </header>

      <div className="forms-grid">
        <LikeButton />
        <SearchBar />
        <LoginForm />
        <PlaylistAdder />
      </div>
    </div>
  );
}

export default App;
