import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';
import { NotificationContext } from '../context/NotificationContext';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const { username, loggedIn, toggleLogin } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const { unreadCount } = useContext(NotificationContext);

  return (
    <header className={`app-nav nav-${theme}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-title">ContextHub</span>
        </div>

        <div className="nav-controls">
          <div className="whatsapp-nav-badge">
            <span className="wa-icon-text">Inbox</span>
            {unreadCount > 0 && <span className="wa-count-pill">{unreadCount}</span>}
          </div>

          <div className="user-profile-badge">
            <span className="user-avatar-circle">
              {username ? username.charAt(0).toUpperCase() : 'U'}
            </span>
            <div className="user-details">
              <span className="user-name-display">{username}</span>
              <span className={`user-status-dot ${loggedIn ? 'online' : 'offline'}`}>
                {loggedIn ? 'Online' : 'Offline'}
              </span>
            </div>
            <button
              type="button"
              className="login-toggle-btn"
              onClick={toggleLogin}
            >
              {loggedIn ? 'Log Out' : 'Log In'}
            </button>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
