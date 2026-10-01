import React, { useState, useEffect } from 'react';

function TrendingSongs() {
  const [songs, setSongs] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [forceFail, setForceFail] = useState(false);

  const loadTrendingSongs = async () => {
    setLoading(true);
    setHasError(false);

    const endpoint = forceFail
      ? 'https://jsonplaceholder.typicode.com/invalid-trending-posts-url'
      : 'https://jsonplaceholder.typicode.com/posts';

    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const first3 = data.slice(0, 3).map((item, idx) => ({
        id: item.id,
        title: item.title,
        trackNumber: idx + 1
      }));

      setSongs(first3);
      setHasError(false);
    } catch (err) {
      console.error('Fetch caught error:', err);
      setHasError(true);
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingSongs();
  }, [forceFail]);

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Trending Songs</h3>
      </div>
      <p className="card-subtext">
        Top 3 tracks updated from playlist catalog.
      </p>

      <div className="control-strip">
        <button
          type="button"
          className="reload-btn"
          onClick={loadTrendingSongs}
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Reload'}
        </button>

        <button
          type="button"
          className={`toggle-fail-btn ${forceFail ? 'active' : ''}`}
          onClick={() => setForceFail(prev => !prev)}
        >
          {forceFail ? 'Use Normal Endpoint' : 'Test Error State'}
        </button>
      </div>

      {loading && (
        <div className="status-banner loading">
          <span className="spinner-dots"></span>
          <span>Loading top 3 trending songs...</span>
        </div>
      )}

      {!loading && hasError && (
        <div className="status-banner error">
          <div className="error-text-wrap">
            <strong>Error loading data</strong>
            <p>Unable to retrieve songs from the server. Click "Reload" to retry.</p>
          </div>
          <button type="button" className="retry-action-btn" onClick={loadTrendingSongs}>
            Retry Now
          </button>
        </div>
      )}

      {!loading && !hasError && (
        <div className="songs-list">
          {songs.map((song) => (
            <div key={song.id} className="song-card">
              <span className="song-number">#{song.trackNumber}</span>
              <div className="song-details">
                <span className="song-title">{song.title}</span>
                <span className="song-id-meta">Track ID: {song.id}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TrendingSongs;
