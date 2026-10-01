import React, { useState } from 'react';
import axios from 'axios';

function CommentForm() {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [postedComment, setPostedComment] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !comment.trim()) return;

    setSubmitting(true);
    setError('');

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/comments', {
        name: username,
        body: comment,
        email: `${username.toLowerCase().replace(/\s+/g, '')}@community.io`,
        postId: 1
      });

      setPostedComment(response.data);
      setUsername('');
      setComment('');
    } catch (err) {
      console.error('Comment POST error:', err);
      setError('Failed to post comment. Check network connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Community Discussion</h3>
      </div>
      <p className="card-subtext">
        Post comments and thoughts on the forum.
      </p>

      <form onSubmit={handleSubmit} className="custom-form">
        <div className="form-group">
          <label htmlFor="comment-username">Username</label>
          <input
            id="comment-username"
            type="text"
            className="text-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment-body">Comment Message</label>
          <textarea
            id="comment-body"
            className="text-input textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
            rows="3"
            required
          />
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={submitting || !username.trim() || !comment.trim()}
        >
          {submitting ? 'Posting Comment...' : 'Submit Comment'}
        </button>
      </form>

      {error && (
        <div className="status-box error-box">
          <p>{error}</p>
        </div>
      )}

      {postedComment && (
        <div className="comment-response-card">
          <div className="response-header">
            <span className="response-badge">Comment Posted (ID: {postedComment.id})</span>
          </div>
          <div className="response-body">
            <div className="comment-avatar">
              {postedComment.name ? postedComment.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="comment-text-box">
              <span className="comment-author">{postedComment.name}</span>
              <span className="comment-email">{postedComment.email}</span>
              <p className="comment-message">{postedComment.body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentForm;
