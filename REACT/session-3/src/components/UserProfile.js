import React from 'react';
import PropTypes from 'prop-types';

// Task 2: UserProfile takes username, followers, profilePic as props
function UserProfile({ username, followers, profilePic }) {
  return (
    <div className="user-profile-card">
      <div className="profile-top">
        <div className="avatar-ring">
          <img
            src={profilePic}
            alt={`${username}'s profile`}
            className="user-avatar"
          />
        </div>
        <div className="user-details">
          <h4 className="username">@{username}</h4>
          <span className="verified-badge">✓ Verified</span>
        </div>
      </div>
      <div className="followers-counter">
        <span className="count-number">{followers.toLocaleString()}</span>
        <span className="count-label">Followers</span>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  );
}

// Task 3: Setup defaultProps fallback values
UserProfile.defaultProps = {
  followers: 0,
  profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  followers: PropTypes.number,
  profilePic: PropTypes.string
};

export default UserProfile;
