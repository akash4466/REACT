import React, { useState } from 'react';

// Task 3: Spotify playlist song voting component; upvote/downvote; count never drops below 0
function SongVote({ songTitle = 'Starboy', artist = 'The Weeknd ft. Daft Punk' }) {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(prev => prev + 1);
  };

  const handleDownvote = () => {
    // Prevent vote count from going below zero
    setVotes(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="component-card song-vote-card">
      <h3>3. Spotify Song Vote</h3>
      <p className="card-desc">Upvote or downvote (strictly non-negative count)</p>

      <div className="song-vote-wrapper">
        <div className="vote-controls">
          <button
            className="vote-btn upvote"
            onClick={handleUpvote}
            title="Upvote song"
          >
            ▲
          </button>
          <span className="vote-count">{votes}</span>
          <button
            className="vote-btn downvote"
            onClick={handleDownvote}
            disabled={votes === 0}
            title="Downvote song"
          >
            ▼
          </button>
        </div>

        <div className="song-info">
          <div className="song-icon">🎵</div>
          <div>
            <h4 className="song-title">{songTitle}</h4>
            <p className="song-artist">{artist}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongVote;
