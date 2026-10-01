import React, { useState, useEffect } from 'react';

function IPLScoreFetcher() {
  const [matchHeadline, setMatchHeadline] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  const fetchMatchHeadline = () => {
    setLoading(true);
    setError(null);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((posts) => {
        if (posts && posts.length > 0) {
          setMatchHeadline(posts[0].title);
        } else {
          setMatchHeadline('No match updates available.');
        }
        setLastRefreshed(new Date().toLocaleTimeString());
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching match data:', err);
        setError('Failed to fetch live match headline. Please check your connection.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMatchHeadline();
  }, []);

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>IPL Score Fetcher</h3>
      </div>
      <p className="card-subtext">
        Live tournament match headline.
      </p>

      <div className="ipl-scoreboard-card">
        <div className="scoreboard-header">
          <span className="tournament-tag">IPL Tournament Centre</span>
          {lastRefreshed && (
            <span className="timestamp-tag">Synced: {lastRefreshed}</span>
          )}
        </div>

        <div className="headline-section">
          <div className="headline-label">Current Match Headline:</div>
          {loading ? (
            <div className="loading-state">
              <span className="spinner"></span> Fetching headline...
            </div>
          ) : error ? (
            <div className="error-state">{error}</div>
          ) : (
            <div className="headline-content">
              <p className="headline-text">"{matchHeadline}"</p>
            </div>
          )}
        </div>

        <div className="match-teams-preview">
          <div className="team-badge">
            <span className="team-code">CSK</span>
            <span className="team-score">189/4 (20.0)</span>
          </div>
          <span className="vs-divider">VS</span>
          <div className="team-badge">
            <span className="team-code">RCB</span>
            <span className="team-score">192/3 (19.2)</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button
          type="button"
          className="refresh-btn"
          onClick={fetchMatchHeadline}
          disabled={loading}
        >
          {loading ? 'Refreshing...' : 'Refresh Headline'}
        </button>
      </div>
    </div>
  );
}

export default IPLScoreFetcher;
