import React from 'react';

// Tasks 4 & 5: MiniProfile functional component with properly closed JSX tags and valid HTML
function MiniProfile({ profilePic, name, status, username = 'developer_coder' }) {
  const defaultPic = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';

  return (
    <div className="mini-profile-card">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img
            src={profilePic || defaultPic}
            alt={`${name}'s profile avatar`}
            className="avatar-img"
          />
        </div>
        <div className="profile-info">
          <h4 className="profile-username">@{username}</h4>
          <h3 className="profile-fullname">{name}</h3>
          <p className="profile-status">{status}</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat-item">
          <strong>142</strong>
          <span>Posts</span>
        </div>
        <div className="stat-item">
          <strong>4.8k</strong>
          <span>Followers</span>
        </div>
        <div className="stat-item">
          <strong>520</strong>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}

export default MiniProfile;
