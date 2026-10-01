import React from 'react';

/**
 * Task 4: New Feature - Dark Mode Toggle
 */
function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <button
      type="button"
      className="theme-switcher-pill"
      onClick={onToggle}
      aria-label="Toggle Dark and Light theme"
    >
      <span className="theme-icon">{isDarkMode ? '🌙' : '☀️'}</span>
      <span className="theme-label">{isDarkMode ? 'Dark' : 'Light'}</span>
    </button>
  );
}

export default ThemeToggle;
