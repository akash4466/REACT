import React, { useState, useRef } from 'react';

/**
 * Task 4 (useRef): Refactor an existing React form (for example, a feedback form with name
 * and message fields) to use controlled components for both inputs, and add a button that,
 * when clicked, focuses the message input using useRef.
 */
function FeedbackForm() {
  // Controlled state for both inputs
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  // useRef hook to reference the message textarea/input DOM element
  const messageInputRef = useRef(null);

  // Handler for the special button that focuses the message input
  const handleFocusMessage = () => {
    if (messageInputRef.current) {
      messageInputRef.current.focus();
      // Optional subtle highlight effect
      messageInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert('Please provide both your name and feedback message.');
      if (!message.trim()) {
        messageInputRef.current?.focus();
      }
      return;
    }

    setSubmittedFeedback({
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString()
    });

    setName('');
    setMessage('');
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <div className="badge-wrapper">
          <span className="task-badge badge-useref">Task 4 • useRef</span>
          <span className="hook-pill">Focus Message Ref</span>
        </div>
        <h3>Controlled Feedback Form</h3>
      </div>
      <p className="card-subtext">
        Both inputs are controlled with <code>useState</code>. Click the "Focus Message" button to jump straight to the message field using <code>useRef</code>.
      </p>

      {/* Quick Action Button required by task */}
      <div className="quick-ref-action">
        <button
          type="button"
          className="focus-trigger-btn"
          onClick={handleFocusMessage}
        >
          🎯 Jump &amp; Focus Message Field (useRef)
        </button>
        <span className="shortcut-hint">Calls <code>messageInputRef.current.focus()</code></span>
      </div>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="fb-name">Full Name</label>
          <input
            id="fb-name"
            type="text"
            className="styled-input"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-field">
          <div className="label-row">
            <label htmlFor="fb-message">Your Feedback / Message</label>
            <span className="char-count">{message.length} characters</span>
          </div>
          <textarea
            id="fb-message"
            ref={messageInputRef}
            rows={4}
            className="styled-textarea"
            placeholder="Write your feedback here... (Focusable via useRef button above)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="form-actions-row">
          <button type="submit" className="submit-feedback-btn">
            Submit Feedback
          </button>
          <button
            type="button"
            className="focus-secondary-btn"
            onClick={handleFocusMessage}
          >
            Focus Message Input
          </button>
        </div>
      </form>

      {submittedFeedback && (
        <div className="feedback-preview-card">
          <div className="preview-top">
            <span className="preview-author">💬 From: {submittedFeedback.name}</span>
            <span className="preview-time">{submittedFeedback.timestamp}</span>
          </div>
          <p className="preview-body">"{submittedFeedback.message}"</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
