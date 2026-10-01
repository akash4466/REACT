import React, { useState, useRef } from 'react';

// Task 2 (useRef): Simple login form with controlled inputs; useRef used to clear & focus username on login
function LoginForm() {
  // Controlled input fields using useState
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successInfo, setSuccessInfo] = useState(null);

  // Ref attached to username field
  const usernameRef = useRef(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert('Please fill out both username and password!');
      usernameRef.current?.focus();
      return;
    }

    // Save success message
    setSuccessInfo({
      user: username,
      time: new Date().toLocaleTimeString()
    });

    // 1. Controlled state reset
    setUsername('');
    setPassword('');

    // 2. Use useRef to clear value directly and focus the username field
    if (usernameRef.current) {
      usernameRef.current.value = '';
      usernameRef.current.focus();
    }
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <div className="badge-wrapper">
          <span className="task-badge badge-useref">Task 2 • useRef</span>
          <span className="hook-pill">Clear &amp; Focus</span>
        </div>
        <h3>Login Form</h3>
      </div>
      <p className="card-subtext">
        Controlled inputs with <code>useState</code>. Upon clicking Login, <code>useRef</code> clears &amp; focuses the username.
      </p>

      <form className="auth-form" onSubmit={handleLoginSubmit}>
        <div className="form-field">
          <label htmlFor="login-user-input">Username</label>
          <div className="input-with-icon">
            <span className="field-icon">👤</span>
            <input
              id="login-user-input"
              ref={usernameRef}
              type="text"
              className="styled-input"
              placeholder="e.g. dev_sarah"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="login-pass-input">Password</label>
          <div className="input-with-icon">
            <span className="field-icon">🔒</span>
            <input
              id="login-pass-input"
              type="password"
              className="styled-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="login-submit-btn">
          Sign In (Login)
        </button>
      </form>

      {successInfo && (
        <div className="login-success-banner">
          <div className="banner-icon">✨</div>
          <div className="banner-details">
            <strong>Logged in as: {successInfo.user}</strong>
            <span>Username field cleared &amp; refocused via <code>usernameRef.current.focus()</code></span>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
