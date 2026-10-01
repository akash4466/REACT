import React, { useState } from 'react';

/**
 * Core interactive player component with playlist selection,
 * play/pause toggle, progress slider, and audio wave animation.
 */
function MusicPlayer() {
  const playlist = [
    { id: 1, title: 'Midnight City Skyline', artist: 'Neon Reverie', duration: '3:45', albumArt: '🌆' },
    { id: 2, title: 'Quantum Drift', artist: 'Cyberwave Collective', duration: '4:12', albumArt: '⚡' },
    { id: 3, title: 'Summer Breeze in Goa', artist: 'Acoustic Solitude', duration: '3:18', albumArt: '🌴' },
    { id: 4, title: 'Deep Focus Chillhop', artist: 'Lo-Fi Lounge', duration: '2:54', albumArt: '☕' }
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [volume, setVolume] = useState(80);

  const currentSong = playlist[currentSongIndex];

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  return (
    <div className="player-layout">
      {/* Now Playing Main Deck */}
      <div className="player-card">
        <div className="album-art-stage">
          <div className={`album-art-disc ${isPlaying ? 'spinning' : ''}`}>
            <span className="album-art-emoji">{currentSong.albumArt}</span>
          </div>
          {isPlaying && (
            <div className="waveform-bars">
              <span className="wave-bar b1"></span>
              <span className="wave-bar b2"></span>
              <span className="wave-bar b3"></span>
              <span className="wave-bar b4"></span>
              <span className="wave-bar b5"></span>
            </div>
          )}
        </div>

        <div className="track-meta">
          <h3 className="track-title">{currentSong.title}</h3>
          <p className="track-artist">{currentSong.artist}</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-section">
          <div className="time-labels">
            <span>01:18</span>
            <span>{currentSong.duration}</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="seek-slider"
          />
        </div>

        {/* Transport Controls */}
        <div className="controls-row">
          <button type="button" className="control-btn" onClick={prevSong} aria-label="Previous track">
            ⏮️
          </button>
          <button
            type="button"
            className="play-pause-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button type="button" className="control-btn" onClick={nextSong} aria-label="Next track">
            ⏭️
          </button>
        </div>

        {/* Volume */}
        <div className="volume-row">
          <span className="vol-icon">🔊</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="volume-slider"
            aria-label="Volume slider"
          />
          <span className="vol-val">{volume}%</span>
        </div>
      </div>

      {/* Playlist Selector */}
      <div className="playlist-sidebar">
        <h4 className="playlist-title">Up Next in Queue</h4>
        <div className="playlist-items">
          {playlist.map((song, idx) => (
            <div
              key={song.id}
              className={`queue-item ${idx === currentSongIndex ? 'active-song' : ''}`}
              onClick={() => {
                setCurrentSongIndex(idx);
                setIsPlaying(true);
              }}
            >
              <span className="queue-emoji">{song.albumArt}</span>
              <div className="queue-info">
                <span className="queue-name">{song.title}</span>
                <span className="queue-artist">{song.artist}</span>
              </div>
              <span className="queue-duration">{song.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
