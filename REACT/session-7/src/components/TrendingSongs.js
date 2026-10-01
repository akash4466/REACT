import React, { useEffect, useState } from 'react';

function TrendingSongs() {
  const [consoleOutput, setConsoleOutput] = useState('');
  const [renderCount, setRenderCount] = useState(1);

  useEffect(() => {
    console.log('Component mounted');
    setConsoleOutput('Component mounted');
  }, []);

  const songs = [
    { id: 1, title: 'Calm Down', artist: 'Rema ft. Selena Gomez', plays: '1.2B', trending: '#1' },
    { id: 2, title: 'Starboy', artist: 'The Weeknd ft. Daft Punk', plays: '2.8B', trending: '#2' },
    { id: 3, title: 'Shape of You', artist: 'Ed Sheeran', plays: '3.6B', trending: '#3' },
    { id: 4, title: 'As It Was', artist: 'Harry Styles', plays: '3.1B', trending: '#4' }
  ];

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Trending Songs</h3>
      </div>
      <p className="card-subtext">
        Popular tracks updated in real time.
      </p>

      <div className="console-indicator">
        <span className="terminal-dot"></span>
        <span className="terminal-label">Console Status:</span>
        <code className="terminal-code">
          {consoleOutput ? `"${consoleOutput}"` : 'Waiting for mount...'}
        </code>
      </div>

      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} className="song-item">
            <span className="song-rank">{song.trending}</span>
            <div className="song-info">
              <span className="song-title">{song.title}</span>
              <span className="song-artist">{song.artist}</span>
            </div>
            <span className="song-plays">{song.plays} plays</span>
          </div>
        ))}
      </div>

      <div className="card-footer">
        <button
          type="button"
          className="re-render-btn"
          onClick={() => setRenderCount(c => c + 1)}
        >
          Update State ({renderCount})
        </button>
      </div>
    </div>
  );
}

export default TrendingSongs;
