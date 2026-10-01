import React, { useState, useEffect } from 'react';

function IPLScores() {
  const [scores, setScores] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [forceBadStatus, setForceBadStatus] = useState(false);

  const fetchCricketScores = async () => {
    setIsLoading(true);
    setErrorMessage('');

    const endpoint = forceBadStatus
      ? 'https://jsonplaceholder.typicode.com/non-existent-status-404'
      : 'https://jsonplaceholder.typicode.com/users';

    try {
      const response = await fetch(endpoint);

      if (response.status !== 200) {
        throw new Error('Error loading scores');
      }

      const users = await response.json();

      const teams = [
        { match: 'CSK vs MI', stadium: 'Wankhede, Mumbai' },
        { match: 'RCB vs KKR', stadium: 'M. Chinnaswamy, Bengaluru' },
        { match: 'GT vs RR', stadium: 'Narendra Modi Stadium, Ahmedabad' },
        { match: 'DC vs SRH', stadium: 'Arun Jaitley Stadium, Delhi' }
      ];

      const cricketMatches = teams.map((team, index) => {
        const user = users[index] || { name: 'Player' };
        return {
          id: index + 1,
          fixture: team.match,
          stadium: team.stadium,
          topPerformer: user.name,
          score1: `${175 + index * 8}/${3 + index} (20 ov)`,
          score2: `${168 + index * 9}/${4 + index} (19.4 ov)`,
          status: index % 2 === 0 ? 'CSK won by 7 runs' : 'Live: 2nd Innings'
        };
      });

      setScores(cricketMatches);
    } catch (err) {
      console.error('Fetch failed:', err.message);
      setErrorMessage('Error loading scores');
      setScores([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCricketScores();
  }, [forceBadStatus]);

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Match Scoreboard</h3>
      </div>
      <p className="card-subtext">
        Live tournament fixtures and score updates.
      </p>

      <div className="control-strip">
        <button
          type="button"
          className="reload-btn"
          onClick={fetchCricketScores}
          disabled={isLoading}
        >
          {isLoading ? 'Checking...' : 'Fetch Scores'}
        </button>

        <button
          type="button"
          className={`toggle-fail-btn ${forceBadStatus ? 'active' : ''}`}
          onClick={() => setForceBadStatus(prev => !prev)}
        >
          {forceBadStatus ? 'Use Normal Endpoint' : 'Test Error State'}
        </button>
      </div>

      {isLoading && (
        <div className="status-banner loading">
          <span className="spinner-dots"></span>
          <span>Fetching scores from server...</span>
        </div>
      )}

      {!isLoading && errorMessage && (
        <div className="status-banner error">
          <div className="error-text-wrap">
            <strong>{errorMessage}</strong>
            <p>API response returned non-200 status code.</p>
          </div>
          <button type="button" className="retry-action-btn" onClick={() => setForceBadStatus(false)}>
            Reset to 200 OK
          </button>
        </div>
      )}

      {!isLoading && !errorMessage && (
        <div className="scores-grid">
          {scores.map((match) => (
            <div key={match.id} className="ipl-match-card">
              <div className="ipl-card-top">
                <span className="fixture-title">{match.fixture}</span>
                <span className="match-status-badge">{match.status}</span>
              </div>
              <div className="scores-row">
                <span className="team-score">{match.score1}</span>
                <span className="vs-tag">vs</span>
                <span className="team-score">{match.score2}</span>
              </div>
              <div className="ipl-card-bottom">
                <span className="match-venue">{match.stadium}</span>
                <span className="match-player">Player of Match: <strong>{match.topPerformer}</strong></span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default IPLScores;
