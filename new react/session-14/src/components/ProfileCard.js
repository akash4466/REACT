import React from 'react';

/**
 * Task 1: Reusable ProfileCard component
 * Displays user's name, profile picture URL, and a short bio.
 */
function ProfileCard({
  name = 'Sophia Chen',
  profilePicUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  bio = 'Full-Stack Developer & UI/UX Designer • Building aesthetic web experiences with React & Next.js 🚀',
  handle = '@sophiachen',
  location = 'San Francisco, CA'
}) {
  return (
    <div className="instabio-profile-card">
      <div className="profile-banner">
        <span className="profile-badge">PRO VERIFIED ✓</span>
      </div>

      <div className="profile-avatar-container">
        <img
          src={profilePicUrl}
          alt={`${name}'s Profile Avatar`}
          className="profile-avatar-img"
          onError={(e) => {
            // Fallback avatar if external image fails
            e.target.onerror = null;
            e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name) + '&background=ec4899&color=fff&size=200';
          }}
        />
      </div>

      <div className="profile-details">
        <h2 className="profile-name">{name}</h2>
        <span className="profile-handle">{handle}</span>
        <p className="profile-bio">{bio}</p>
        <div className="profile-meta">
          <span>📍 {location}</span>
          <span>⚡ Available for Hire</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
