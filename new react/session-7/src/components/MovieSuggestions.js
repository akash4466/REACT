import React, { useState, useEffect } from 'react';

function MovieSuggestions() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((usersData) => {
        setMovies(usersData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch movie suggestions:', err);
        setError('Could not load movie suggestions.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Movie Suggestions</h3>
      </div>
      <p className="card-subtext">
        Recommended titles updated on load.
      </p>

      {loading && (
        <div className="loading-card-box">
          <div className="loading-spinner-ring"></div>
          <p className="loading-msg">Fetching recommended movies for you...</p>
        </div>
      )}

      {error && !loading && (
        <div className="error-card-box">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="movie-list-container">
          <div className="list-meta">
            <span>Showing {movies.length} Curated Titles</span>
            <span className="genre-pill">Top Picks</span>
          </div>
          <ul className="movie-names-list">
            {movies.map((item, index) => (
              <li key={item.id} className="movie-name-item">
                <span className="movie-index">#{index + 1}</span>
                <div className="movie-text-col">
                  <span className="movie-title">{item.name}</span>
                  <span className="movie-sub-info">{item.company?.name || item.username}</span>
                </div>
                <span className="rating-pill">{(8.5 + (index % 15) * 0.1).toFixed(1)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieSuggestions;
