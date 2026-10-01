import React, { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';
import AboutPage from './components/AboutPage';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

/**
 * Session 13: Production App - MusicPulse
 * Task 1: Optimized production build with npm run build
 * Task 2: Free Netlify setup with GitHub CI/CD integration
 * Task 3: package.json homepage custom URL configuration
 * Task 4: Dark mode toggle & About page features
 * Task 5: Mobile feedback testing & responsive UX improvements
 */
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('player'); // 'player' | 'about'

  return (
    <div className={`app-shell ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      {/* Top Navigation */}
      <header className="navbar">
        <div className="nav-container">
          <div className="brand" onClick={() => setActiveTab('player')}>
            <span className="brand-disc">🎵</span>
            <span className="brand-title">MusicPulse</span>
            <span className="live-tag">LIVE ON NETLIFY</span>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className={`nav-tab-btn ${activeTab === 'player' ? 'active' : ''}`}
              onClick={() => setActiveTab('player')}
            >
              Player
            </button>
            <button
              type="button"
              className={`nav-tab-btn ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <ThemeToggle
              isDarkMode={isDarkMode}
              onToggle={() => setIsDarkMode(prev => !prev)}
            />
          </div>
        </div>
      </header>

      {/* Deployment & Task Verification Banner */}
      <div className="deployment-banner">
        <div className="banner-content">
          <span className="deployment-badge">Netlify Production Ready</span>
          <span className="deployment-info">
            URL: <code>https://musicpulse-player.netlify.app</code> • Built with Vite &amp; React 18
          </span>
        </div>
      </div>

      {/* Main View Area */}
      <main className="main-content">
        {activeTab === 'player' ? (
          <MusicPlayer />
        ) : (
          <AboutPage onBackToPlayer={() => setActiveTab('player')} />
        )}
      </main>

      <footer className="footer">
        <p>© 2026 MusicPulse • Session 13 Production Build &amp; Netlify Deployment</p>
      </footer>
    </div>
  );
}

export default App;
