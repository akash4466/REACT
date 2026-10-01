import React, { useRef, useEffect, useState } from 'react';

function SearchBar() {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setSubmittedQuery(searchTerm);
    }
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Product Search</h3>
      </div>
      <p className="card-subtext">
        Search for items across all categories.
      </p>

      <div className="searchbar-group">
        <div className="input-wrapper">
          <input
            ref={inputRef}
            type="text"
            className="styled-input"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="button" className="btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {submittedQuery && (
        <div className="result-chip">
          Searched for: <strong>"{submittedQuery}"</strong>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
