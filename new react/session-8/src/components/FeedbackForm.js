import React, { useState, useRef } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedbackSummary, setFeedbackSummary] = useState(null);

  const messageInputRef = useRef(null);

  const handleFocusMessage = () => {
    messageInputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert('Please fill in both name and message.');
      if (!message.trim()) {
        messageInputRef.current?.focus();
      }
      return;
    }

    setFeedbackSummary({
      name: name.trim(),
      message: message.trim(),
      time: new Date().toLocaleTimeString()
    });

    setName('');
    setMessage('');
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>User Feedback</h3>
      </div>
      <p className="card-subtext">
        Send questions or comments to the support team.
      </p>

      <div className="action-banner">
        <button
          type="button"
          className="btn-purple"
          onClick={handleFocusMessage}
        >
          Jump to Message
        </button>
      </div>

      <form className="form-layout" onSubmit={handleSubmit}>
        <div className="field-group">
          <label htmlFor="s8-fb-name">Your Name</label>
          <input
            id="s8-fb-name"
            type="text"
            className="styled-input"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field-group">
          <div className="label-flex">
            <label htmlFor="s8-fb-message">Feedback Message</label>
            <span className="char-badge">{message.length} chars</span>
          </div>
          <textarea
            id="s8-fb-message"
            ref={messageInputRef}
            rows={4}
            className="styled-textarea"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="buttons-row">
          <button type="submit" className="btn-primary">
            Submit Feedback
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={handleFocusMessage}
          >
            Focus Message Field
          </button>
        </div>
      </form>

      {feedbackSummary && (
        <div className="preview-card">
          <div className="preview-header">
            <strong>From: {feedbackSummary.name}</strong>
            <span>{feedbackSummary.time}</span>
          </div>
          <p className="preview-text">"{feedbackSummary.message}"</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
