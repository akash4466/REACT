import React, { useState } from 'react';
import axios from 'axios';

function AddPlaylist() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    setSuccessResponse(null);
    setErrorMessage('');

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: name,
        body: description,
        userId: 1
      });

      setSuccessResponse({
        id: response.data.id,
        name: response.data.title,
        description: response.data.body,
        status: response.status
      });

      setName('');
      setDescription('');
    } catch (err) {
      console.error('Axios POST error:', err);
      setErrorMessage('Failed to create playlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Create Playlist</h3>
      </div>
      <p className="card-subtext">
        Add new playlists to your music profile.
      </p>

      <form onSubmit={handleSubmit} className="custom-form">
        <div className="form-group">
          <label htmlFor="playlist-name">Playlist Name</label>
          <input
            id="playlist-name"
            type="text"
            className="text-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Focus Playlist"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="playlist-desc">Description</label>
          <textarea
            id="playlist-desc"
            className="text-input textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description or genres included"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting || !name.trim()}
        >
          {isSubmitting ? 'Creating Playlist...' : 'Create Playlist'}
        </button>
      </form>

      {successResponse && (
        <div className="status-box success-box">
          <div className="success-content">
            <h4>Playlist Created Successfully (Status {successResponse.status})</h4>
            <p>
              Created <strong>"{successResponse.name}"</strong> (ID: {successResponse.id}).
            </p>
            {successResponse.description && (
              <small>Description: {successResponse.description}</small>
            )}
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="status-box error-box">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default AddPlaylist;
