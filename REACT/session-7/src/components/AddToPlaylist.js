import React, { useState, useRef } from 'react';

// Task 3 (useRef): AddToPlaylist allowing rapid song additions by refocusing input via inputRef.current.focus()
function AddToPlaylist() {
  const [songName, setSongName] = useState('');
  const [playlist, setPlaylist] = useState([
    'Calm Down - Rema',
    'Starboy - The Weeknd',
    'Levitating - Dua Lipa'
  ]);

  // Create a ref for the song input field
  const songInputRef = useRef(null);

  const handleAddSong = (e) => {
    e.preventDefault();

    const trimmedSong = songName.trim();
    if (!trimmedSong) {
      songInputRef.current?.focus();
      return;
    }

    // 1. Update playlist state
    setPlaylist((prevPlaylist) => [...prevPlaylist, trimmedSong]);

    // 2. Clear input state
    setSongName('');

    // 3. Hint requirement: Call inputRef.current.focus() after updating the playlist
    if (songInputRef.current) {
      songInputRef.current.focus();
    }
  };

  const handleRemoveTrack = (indexToRemove) => {
    setPlaylist(prev => prev.filter((_, idx) => idx !== indexToRemove));
    // Refocus input to keep user in active flow
    songInputRef.current?.focus();
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <div className="badge-wrapper">
          <span className="task-badge badge-useref">Task 3 • useRef</span>
          <span className="hook-pill">Rapid Entry Focus</span>
        </div>
        <h3>Add To Playlist</h3>
      </div>
      <p className="card-subtext">
        After adding a track, <code>inputRef.current.focus()</code> instantly refocuses the input for rapid song queueing.
      </p>

      <form className="playlist-add-form" onSubmit={handleAddSong}>
        <div className="input-group">
          <input
            ref={songInputRef}
            type="text"
            className="styled-input playlist-input"
            placeholder="Type song name (e.g. Bohemian Rhapsody)..."
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
          />
          <button type="submit" className="add-btn">
            ➕ Add
          </button>
        </div>
      </form>

      <div className="playlist-queue">
        <div className="queue-meta">
          <span>Queue ({playlist.length} tracks)</span>
          <span className="tip-tag">💡 Input auto-refocused after adding</span>
        </div>

        {playlist.length === 0 ? (
          <p className="empty-notice">Playlist empty. Start typing to build your queue!</p>
        ) : (
          <ul className="queue-list">
            {playlist.map((song, idx) => (
              <li key={`${song}-${idx}`} className="queue-item">
                <span className="queue-num">{idx + 1}</span>
                <span className="queue-music-icon">🎵</span>
                <span className="queue-title">{song}</span>
                <button
                  type="button"
                  className="delete-song-btn"
                  onClick={() => handleRemoveTrack(idx)}
                  title="Remove from playlist"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default AddToPlaylist;
