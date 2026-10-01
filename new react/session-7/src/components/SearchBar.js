import React, { useRef, useEffect, useState } from 'react';

// Task 1 (useRef): SearchBar with input field & button, using useRef to auto-focus on mount
function SearchBar() {
  // 1. Create a ref for the input DOM element
  const searchInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [lastSearched, setLastSearched] = useState('');

  // 2. Automatically focus the input field when component mounts
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      setLastSearched(searchTerm);
    }
  };

  const handleManualFocus = () => {
    searchInputRef.current?.focus();
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <div className="badge-wrapper">
          <span className="task-badge badge-useref">Task 1 • useRef</span>
          <span className="hook-pill">Auto-Focus</span>
        </div>
        <h3>SearchBar</h3>
      </div>
      <p className="card-subtext">
        Uses <code>useRef</code> + <code>useEffect</code> to focus the input field automatically when mounted.
      </p>

      <div className="searchbar-box">
        <div className="searchbar-input-group">
          <span className="input-prefix-icon">🔍</span>
          <input
            ref={searchInputRef}
            type="text"
            className="styled-input"
            placeholder="Auto-focused on mount! Type here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="button"
            className="search-action-btn"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>

        <div className="ref-status-banner">
          <span className="status-bullet">🎯</span>
          <span>Input was automatically focused on page/tab load via <code>useRef()</code>.</span>
          <button
            type="button"
            className="refocus-chip-btn"
            onClick={handleManualFocus}
          >
            Refocus with ref
          </button>
        </div>

        {lastSearched && (
          <div className="search-result-chip">
            Searched for: <strong>"{lastSearched}"</strong>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
