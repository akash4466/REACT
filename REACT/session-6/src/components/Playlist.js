import React from 'react';

// Task 1: Playlist component taking array of song objects (title and artist) and using map() to render in an unordered list
function Playlist({ songs = [] }) {
  return (
    <div className="card-box playlist-box">
      <div className="box-header">
        <span className="pill">Task 1</span>
        <h3>Music Playlist</h3>
      </div>
      <p className="box-desc">Renders an array of song objects using Array.prototype.map()</p>

      {songs.length === 0 ? (
        <p className="empty-state">No songs in playlist.</p>
      ) : (
        <ul className="playlist-ul">
          {songs.map((song, index) => (
            <li key={song.id || index} className="playlist-li">
              <span className="track-idx">{index + 1}.</span>
              <div className="song-meta">
                <span className="song-title">{song.title}</span>
                <span className="song-artist">{song.artist}</span>
              </div>
              <span className="audio-wave">♬</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Playlist;
