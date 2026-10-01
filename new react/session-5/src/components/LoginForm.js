import React, { useState } from 'react';

// Tasks 3 & 5: LoginForm with onSubmit event, alert credentials, inputs cleared without page reload
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [lastSubmittedUser, setLastSubmittedUser] = useState(null);

  const handleSubmit = (e) => {
    // Prevent default browser form submission (page reload)
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert('Please fill in both username and password fields!');
      return;
    }

    // Task 3: Display alert with entered credentials
    alert(`Login Successful!\n\nUsername: ${username}\nPassword: ${password}`);

    // Track submission for on-screen verification
    setLastSubmittedUser(username);

    // Task 5: Clear input fields after successful submission (without page reload)
    setUsername('');
    setPassword('');
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <span className="task-pill">Tasks 3 & 5</span>
        <h3>Secure Login Form</h3>
      </div>
      <p className="card-subtext">Handles onSubmit with e.preventDefault() & clears inputs without reload</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-username">Username</label>
          <input
            id="login-username"
            type="text"
            className="form-input"
            placeholder="Enter username (e.g. john_doe)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            className="form-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </form>

      {lastSubmittedUser && (
        <div className="submission-badge">
          ✅ Form submitted successfully for: <strong>{lastSubmittedUser}</strong> (Inputs cleared cleanly)
        </div>
      )}
    </div>
  );
}

export default LoginForm;
