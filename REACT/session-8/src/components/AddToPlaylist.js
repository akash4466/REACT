import React, { useState, useRef } from 'react';

function AddToPlaylist() {
  const [songName, setSongName] = useState('');
  const [playlist, setPlaylist] = useState([
    'Calm Down - Rema',
    'Starboy - The Weeknd'
  ]);

  const inputRef = useRef(null);

  const handleAddSong = (e) => {
    e.preventDefault();

    const trimmedSong = songName.trim();
    if (!trimmedSong) {
      inputRef.current?.focus();
      return;
    }

    setPlaylist((prev) => [...prev, trimmedSong]);
    setSongName('');

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleRemove = (index) => {
    setPlaylist((prev) => prev.filter((_, i) => i !== index));
    inputRef.current?.focus();
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Playlist Manager</h3>
      </div>
      <p className="card-subtext">
        Add songs to your customized playlist queue.
      </p>

      <form className="inline-form" onSubmit={handleAddSong}>
        <input
          ref={inputRef}
          type="text"
          className="styled-input"
          placeholder="Enter song title..."
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
        <button type="submit" className="btn-success">
          Add
        </button>
      </form>

      <div className="playlist-meta">
        <span>Current Tracks ({playlist.length})</span>
      </div>

      <ul className="playlist-items">
        {playlist.map((song, idx) => (
          <li key={`${song}-${idx}`} className="playlist-item">
            <span className="song-number">{idx + 1}</span>
            <span className="song-name">{song}</span>
            <button
              type="button"
              className="btn-delete"
              onClick={() => handleRemove(idx)}
              title="Remove song"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddToPlaylist;
