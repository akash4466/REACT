import React from 'react';
import TrendingSongs from './components/TrendingSongs';
import IPLScoreFetcher from './components/IPLScoreFetcher';
import MovieSuggestions from './components/MovieSuggestions';
import AutoFetchNews from './components/AutoFetchNews';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Music, Sports and Movie Feed</h1>
        <p className="subtitle">
          Live streaming feeds, latest tournament headlines, movie picks, and technology updates.
        </p>
      </header>

      <div className="components-grid">
        <TrendingSongs />
        <IPLScoreFetcher />
        <MovieSuggestions />
        <AutoFetchNews />
      </div>
    </div>
  );
}

export default App;
