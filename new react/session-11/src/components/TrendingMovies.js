import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [simulateError, setSimulateError] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);

    const url = simulateError
      ? 'https://jsonplaceholder.typicode.com/invalid-movie-endpoint'
      : 'https://jsonplaceholder.typicode.com/posts';

    try {
      const response = await axios.get(url, { timeout: 6000 });

      const titles = [
        'Oppenheimer (2023)',
        'Dune: Part Two (2024)',
        'Spider-Man: Across the Spider-Verse',
        'Interstellar (IMAX Re-release)',
        'Inception: 15th Anniversary Edition'
      ];

      const first5 = response.data.slice(0, 5).map((item, index) => ({
        id: item.id,
        title: titles[index] || item.title,
        originalPostTitle: item.title,
        rating: (8.4 + index * 0.2).toFixed(1),
        year: '2024'
      }));

      setMovies(first5);
      setLoading(false);
    } catch (err) {
      console.error('Axios fetch error:', err);
      setError('Failed to fetch trending movies. Please verify connection or API endpoint.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [simulateError]);

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Trending Movies</h3>
      </div>
      <p className="card-subtext">
        Popular movies currently in theaters.
      </p>

      <div className="toggle-bar">
        <button
          type="button"
          className="refresh-btn"
          onClick={fetchMovies}
          disabled={loading}
        >
          Refresh List
        </button>
        <button
          type="button"
          className={`simulate-btn ${simulateError ? 'active' : ''}`}
          onClick={() => setSimulateError(prev => !prev)}
        >
          {simulateError ? 'Use Normal Endpoint' : 'Test Error State'}
        </button>
      </div>

      {loading && (
        <div className="status-box loading-box">
          <span className="spinner"></span>
          <p>Loading trending movies...</p>
        </div>
      )}

      {!loading && error && (
        <div className="status-box error-box">
          <div>
            <strong>Error:</strong>
            <p>{error}</p>
          </div>
          <button type="button" className="retry-btn" onClick={fetchMovies}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="movie-list">
          {movies.map((movie, index) => (
            <div key={movie.id} className="movie-item">
              <span className="movie-rank">#{index + 1}</span>
              <div className="movie-info">
                <span className="movie-title">{movie.title}</span>
                <span className="movie-meta">Rating: {movie.rating} / 10 | {movie.year}</span>
              </div>
              <span className="movie-badge">Popular</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrendingMovies;
