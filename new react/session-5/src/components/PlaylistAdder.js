import React, { useState } from 'react';

// Task 4: Spotify-style PlaylistAdder component allowing user to add songs to a displayed list
function PlaylistAdder() {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [playlist, setPlaylist] = useState([
    { id: 1, title: 'Calm Down', artist: 'Rema ft. Selena Gomez' },
    { id: 2, title: 'Starboy', artist: 'The Weeknd' }
  ]);

  const handleAddSong = (e) => {
    e.preventDefault();

    if (!songName.trim() || !artist.trim()) {
      alert('Please provide both song title and artist name!');
      return;
    }

    const newSong = {
      id: Date.now(),
      title: songName.trim(),
      artist: artist.trim()
    };

    setPlaylist(prev => [...prev, newSong]);
    setSongName('');
    setArtist('');
  };

  const handleRemoveSong = (id) => {
    setPlaylist(prev => prev.filter(song => song.id !== id));
  };

  return (
    <div className="component-card playlist-adder-card">
      <div className="card-header">
        <span className="task-pill">Task 4</span>
        <h3>Spotify Playlist Adder</h3>
      </div>
      <p className="card-subtext">Add new tracks with song title & artist directly to the playlist</p>

      <form className="adder-form" onSubmit={handleAddSong}>
        <div className="adder-inputs">
          <input
            type="text"
            className="form-input"
            placeholder="Song name (e.g. Blinding Lights)"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            required
          />
          <input
            type="text"
            className="form-input"
            placeholder="Artist (e.g. The Weeknd)"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-song-btn">
          ➕ Add to Playlist
        </button>
      </form>

      <div className="playlist-display">
        <h4>Playlist Tracks ({playlist.length})</h4>
        {playlist.length === 0 ? (
          <p className="empty-notice">No tracks added yet. Add your favorite track above!</p>
        ) : (
          <ul className="tracks-list">
            {playlist.map((song, index) => (
              <li key={song.id} className="track-row">
                <span className="track-number">{index + 1}</span>
                <span className="track-disc">🎵</span>
                <div className="track-details">
                  <span className="track-title">{song.title}</span>
                  <span className="track-artist">{song.artist}</span>
                </div>
                <button
                  className="remove-track-btn"
                  onClick={() => handleRemoveSong(song.id)}
                  title="Remove track"
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

export default PlaylistAdder;
