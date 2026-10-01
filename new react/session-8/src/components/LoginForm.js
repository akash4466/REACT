import React, { useState, useRef } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [lastLoggedIn, setLastLoggedIn] = useState(null);

  const usernameRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert('Please enter both username and password.');
      usernameRef.current?.focus();
      return;
    }

    setLastLoggedIn(username);
    setUsername('');
    setPassword('');

    if (usernameRef.current) {
      usernameRef.current.value = '';
      usernameRef.current.focus();
    }
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Account Login</h3>
      </div>
      <p className="card-subtext">
        Enter credentials to access account.
      </p>

      <form className="form-layout" onSubmit={handleLogin}>
        <div className="field-group">
          <label htmlFor="s8-username">Username</label>
          <div className="input-wrapper">
            <input
              id="s8-username"
              ref={usernameRef}
              type="text"
              className="styled-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="field-group">
          <label htmlFor="s8-password">Password</label>
          <div className="input-wrapper">
            <input
              id="s8-password"
              type="password"
              className="styled-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn-primary btn-block">
          Login
        </button>
      </form>

      {lastLoggedIn && (
        <div className="login-alert-badge">
          Logged in successfully as <strong>{lastLoggedIn}</strong>.
        </div>
      )}
    </div>
  );
}

export default LoginForm;
