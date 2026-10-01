import React, { useContext } from 'react';
import { UserProvider, UserContext } from './context/UserContext';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { NotificationProvider } from './context/NotificationContext';

import Navbar from './components/Navbar';
import DeepChildRefactor from './components/DeepChildRefactor';
import NotificationDemo from './components/NotificationDemo';
import './App.css';

function MainContent() {
  const { theme } = useContext(ThemeContext);
  const { username, setUsername } = useContext(UserContext);

  return (
    <div className={`main-app-wrapper theme-${theme}`}>
      <Navbar />

      <main className="app-container">
        <header className="app-header">
          <h1>Application Settings and Profile</h1>
          <p className="subtitle">
            Manage user state, theme preferences, and notifications.
          </p>
        </header>

        <section className="user-editor-card">
          <div className="editor-left">
            <h3>Active Profile</h3>
            <p>Update your display name across all components.</p>
          </div>
          <div className="editor-input-group">
            <label htmlFor="username-input">Display Name:</label>
            <input
              id="username-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="user-input"
              placeholder="Enter name"
            />
          </div>
        </section>

        <div className="components-grid">
          <DeepChildRefactor />
          <NotificationDemo />
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2026 ContextHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          <MainContent />
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
