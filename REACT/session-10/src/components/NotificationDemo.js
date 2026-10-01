import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

function NotificationDemo() {
  const {
    unreadCount,
    recentMessages,
    incrementCount,
    decrementCount,
    clearNotifications
  } = useContext(NotificationContext);

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Notification Center</h3>
      </div>
      <p className="card-subtext">
        Real-time unread counter and message stream.
      </p>

      <div className="wa-phone-card">
        <div className="wa-header">
          <div className="wa-header-left">
            <span className="wa-app-title">Recent Chats</span>
          </div>
          <div className="wa-badge-container">
            {unreadCount > 0 ? (
              <span className="wa-pill-badge" aria-label={`${unreadCount} unread messages`}>
                {unreadCount} unread
              </span>
            ) : (
              <span className="wa-pill-zero">0 unread</span>
            )}
          </div>
        </div>

        <div className="wa-action-bar">
          <button
            type="button"
            className="wa-btn wa-btn-add"
            onClick={incrementCount}
          >
            New Message
          </button>
          <button
            type="button"
            className="wa-btn wa-btn-read"
            onClick={decrementCount}
            disabled={unreadCount === 0}
          >
            Mark One Read
          </button>
          <button
            type="button"
            className="wa-btn wa-btn-clear"
            onClick={clearNotifications}
            disabled={unreadCount === 0}
          >
            Clear All
          </button>
        </div>

        <div className="wa-messages-list">
          {recentMessages.slice(0, 4).map((msg) => (
            <div key={msg.id} className="wa-msg-item">
              <div className="wa-avatar-placeholder">
                {msg.sender.charAt(0)}
              </div>
              <div className="wa-msg-content">
                <div className="wa-msg-top">
                  <span className="wa-sender-name">{msg.sender}</span>
                  <span className="wa-msg-time">{msg.time}</span>
                </div>
                <p className="wa-msg-snippet">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationDemo;
