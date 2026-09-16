import React, { useState } from 'react';

// Task 1: LikeButton displaying heart icon and count starting at 0; useState increments on click.
function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  return (
    <div className="component-card">
      <h3>1. Like Button</h3>
      <p className="card-desc">Click heart to increment like count with useState</p>
      <button className="like-btn" onClick={handleLike}>
        <span className="heart-icon">❤️</span>
        <span className="like-text">Like</span>
        <span className="like-counter-badge">{likes}</span>
      </button>
    </div>
  );
}

export default LikeButton;
