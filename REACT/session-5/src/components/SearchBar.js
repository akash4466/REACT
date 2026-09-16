import React, { useState } from 'react';

// Task 2: SearchBar component for typing product name, displaying value in real-time
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const sampleSuggestions = [
    'iPhone 15 Pro Max',
    'MacBook Air M2',
    'Nike Air Jordan Retro',
    'Sony PlayStation 5'
  ];

  return (
    <div className="component-card">
      <div className="card-header">
        <span className="task-pill">Task 2</span>
        <h3>Flipkart-Style Search Bar</h3>
      </div>
      <p className="card-subtext">Real-time state binding reflects user input instantly below</p>

      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search for products, brands and more..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={() => setSearchTerm('')}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <div className="search-live-output">
        <span className="output-label">Current Search Query:</span>
        <div className="output-value">
          {searchTerm ? (
            <span className="query-active">"{searchTerm}"</span>
          ) : (
            <span className="query-empty">Nothing typed yet. Type above to see real-time updates!</span>
          )}
        </div>
      </div>

      <div className="suggestions-quick">
        <span className="quick-label">Try searching:</span>
        <div className="chip-list">
          {sampleSuggestions.map((item) => (
            <button
              key={item}
              type="button"
              className="suggestion-chip"
              onClick={() => setSearchTerm(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
