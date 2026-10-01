import React from 'react';

/**
 * Task 4: New Feature - About Page
 * Showcases app architecture, Netlify CI/CD deployment info,
 * and version history.
 */
function AboutPage({ onBackToPlayer }) {
  return (
    <div className="about-page-card">
      <div className="about-header">
        <button type="button" className="back-btn" onClick={onBackToPlayer}>
          ← Back to Player
        </button>
        <span className="version-pill">v1.2.0 • Live on Netlify</span>
      </div>

      <div className="about-hero">
        <h2>About MusicPulse</h2>
        <p className="about-lead">
          MusicPulse is an ultra-lightweight, high-performance web music player built with React 18, Vite, and modern CSS glassmorphism.
        </p>
      </div>

      <div className="about-grid">
        <div className="info-box">
          <h4>🚀 Continuous Deployment</h4>
          <p>
            Connected directly to GitHub via Netlify Dashboard. Every push to <code>main</code> triggers an automated build running <code>npm run build</code> with CDN edge caching.
          </p>
        </div>

        <div className="info-box">
          <h4>🌐 SPA Routing &amp; Homepage Config</h4>
          <p>
            Configured with <code>homepage: "https://musicpulse-player.netlify.app"</code> in <code>package.json</code> and a <code>_redirects</code> rule to prevent 404s on browser reloads.
          </p>
        </div>

        <div className="info-box">
          <h4>🎨 Dynamic Theming &amp; Responsiveness</h4>
          <p>
            Features a real-time Dark/Light mode theme engine with CSS custom properties and thumb-friendly 48px touch targets optimized for mobile browsers.
          </p>
        </div>

        <div className="info-box">
          <h4>⚡ Performance Metrics</h4>
          <p>
            Total production JavaScript payload is under 150KB gzipped, achieving 98+ Lighthouse scores across Performance, Accessibility, and Best Practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
