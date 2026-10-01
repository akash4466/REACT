import React from 'react';

// Task 3: FollowerList component rendering array of usernames or 'No followers yet'
function FollowerList({ followers = [] }) {
  return (
    <div className="card-box follower-list-box">
      <div className="box-header">
        <span className="pill">Task 3</span>
        <h3>Follower List</h3>
      </div>
      <p className="box-desc">Conditional check before mapping: displays fallback if array is empty</p>

      {/* Task 3: Conditional check before mapping */}
      {followers.length === 0 ? (
        <div className="empty-followers">
          <span className="empty-icon">👥</span>
          <p className="no-followers-msg">No followers yet</p>
          <span className="empty-hint">Share your profile to gain new followers</span>
        </div>
      ) : (
        <div className="followers-wrapper">
          <div className="followers-count">Total Followers: {followers.length}</div>
          <ul className="follower-ul">
            {followers.map((username, index) => (
              <li key={index} className="follower-li">
                <span className="follower-avatar">
                  {username.charAt(0).toUpperCase()}
                </span>
                <span className="follower-name">@{username}</span>
                <button className="view-profile-btn">View</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FollowerList;
