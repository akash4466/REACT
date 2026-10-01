import React from 'react';

/**
 * Tasks 2 & 4:
 * Task 2: Reusable SocialLinks component taking an array of social media links as props.
 * Displays them as clickable icons/cards below the profile card.
 *
 * Task 4: Accepts an optional 'theme' prop ('light' or 'dark') and applies
 * different background colors and styles based on the theme.
 */
function SocialLinks({ links = [], theme = 'light' }) {
  // Fallback defaults if no links array passed
  const socialList = links.length > 0 ? links : [
    { platform: 'Instagram', url: 'https://instagram.com', icon: '📸', subtitle: 'Follow on Instagram' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: '💼', subtitle: 'Connect on LinkedIn' },
    { platform: 'GitHub', url: 'https://github.com', icon: '🐙', subtitle: 'Explore Open Source' }
  ];

  // Task 4: Conditional classNames & inline styles based on theme prop
  const themeClass = theme === 'dark' ? 'social-theme-dark' : 'social-theme-light';

  return (
    <div className={`social-links-wrapper ${themeClass}`}>
      <div className="social-header">
        <span className="social-heading">Connect &amp; Socials</span>
        <span className="social-theme-indicator">Theme: {theme}</span>
      </div>

      <div className="social-buttons-grid">
        {socialList.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-btn-card social-${link.platform.toLowerCase()}`}
            title={`Open ${link.platform}`}
          >
            <span className="social-icon">{link.icon}</span>
            <div className="social-btn-text">
              <span className="social-platform-name">{link.platform}</span>
              <span className="social-platform-sub">{link.subtitle || link.url}</span>
            </div>
            <span className="social-arrow">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
