import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import SocialLinks from './components/SocialLinks';
import ProjectCard from './components/ProjectCard';
import './App.css';

/**
 * Session 14: InstaBio React App
 * Task 1: Reusable ProfileCard component
 * Task 2: Reusable SocialLinks component with clickable social media icons
 * Task 3: Assemble simple homepage layout for InstaBio reusing components
 * Task 4: SocialLinks optional 'theme' prop ('light' | 'dark')
 * Task 5: GitHub Copilot suggested structure for ProjectCard with portfolio showcase
 */
function App() {
  const [socialTheme, setSocialTheme] = useState('light');

  // Custom social links dataset passed as props (Task 2)
  const userSocialLinks = [
    { platform: 'Instagram', url: 'https://instagram.com', icon: '📸', subtitle: '42.5K Followers • Daily Design Drops' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: '💼', subtitle: 'Connect for Tech Collaborations' },
    { platform: 'GitHub', url: 'https://github.com', icon: '🐙', subtitle: '60+ Repositories & Open Source' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: '🐦', subtitle: 'Web3 & AI Tech Thoughts' }
  ];

  // Portfolio projects for ProjectCard component (Task 5)
  const portfolioProjects = [
    {
      id: 1,
      title: 'DevPulse - Developer Activity Dashboard',
      description: 'Real-time telemetry dashboard monitoring git commits, CI/CD pipeline health, and code review turnaround time.',
      tags: ['React 18', 'Vite', 'Tailwind', 'Chart.js'],
      liveUrl: 'https://example.com/devpulse',
      githubUrl: 'https://github.com/example/devpulse',
      image: '📊',
      featured: true
    },
    {
      id: 2,
      title: 'Aura Music Streaming Web App',
      description: 'Spatial audio web player with Spotify REST API integration, playlist drag-and-drop, and synchronized lyrics.',
      tags: ['React', 'Web Audio API', 'Axios', 'Context API'],
      liveUrl: 'https://example.com/auraplayer',
      githubUrl: 'https://github.com/example/aura-music',
      image: '🎧',
      featured: false
    },
    {
      id: 3,
      title: 'CloudCart E-Commerce Platform',
      description: 'Flipkart-style scalable store with category filtering, cart state management, and real-time checkout simulation.',
      tags: ['React Router', 'Redux Toolkit', 'Node.js', 'Stripe'],
      liveUrl: 'https://example.com/cloudcart',
      githubUrl: 'https://github.com/example/cloud-cart',
      image: '🛒',
      featured: false
    }
  ];

  return (
    <div className="instabio-root">
      {/* Background Ambience Blobs */}
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>

      {/* Header Bar */}
      <header className="instabio-nav">
        <div className="nav-wrapper">
          <div className="brand-badge">
            <span className="brand-icon">✨</span>
            <span className="brand-name">InstaBio</span>
          </div>

          {/* Task 4: Interactive Theme Switcher for SocialLinks */}
          <div className="theme-toggle-row">
            <span className="toggle-label">SocialLinks Theme Prop:</span>
            <button
              type="button"
              className={`pill-btn ${socialTheme === 'light' ? 'active' : ''}`}
              onClick={() => setSocialTheme('light')}
            >
              ☀️ Light Theme
            </button>
            <button
              type="button"
              className={`pill-btn ${socialTheme === 'dark' ? 'active' : ''}`}
              onClick={() => setSocialTheme('dark')}
            >
              🌙 Dark Theme
            </button>
          </div>
        </div>
      </header>

      {/* Task 3: Assembled InstaBio Homepage Layout */}
      <main className="instabio-layout">
        {/* Left Column: Profile Bio & Social Connect */}
        <section className="profile-section">
          {/* Task 1: Reusable ProfileCard */}
          <ProfileCard
            name="Sophia Chen"
            profilePicUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
            bio="Lead Frontend Architect & Design Technologist. Passionate about performant React components, accessible UI systems, and intuitive user experiences."
            handle="@sophiachen"
            location="Bengaluru &amp; SF"
          />

          {/* Tasks 2 & 4: Reusable SocialLinks with dynamic theme prop */}
          <SocialLinks
            links={userSocialLinks}
            theme={socialTheme}
          />
        </section>

        {/* Right Column: Featured Portfolio Projects (Task 5) */}
        <section className="portfolio-section">
          <div className="section-title-wrap">
            <div className="session-badge">⚡ Task 5 • GitHub Copilot Template</div>
            <h3 className="section-heading">Featured Portfolio Projects</h3>
            <p className="section-subheading">
              Reusable <code>ProjectCard</code> components built using Copilot prompt structure.
            </p>
          </div>

          <div className="projects-grid">
            {portfolioProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                image={project.image}
                featured={project.featured}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="instabio-footer">
        <p>© 2026 InstaBio • Session 14 Component Architecture Showcase</p>
      </footer>
    </div>
  );
}

export default App;
