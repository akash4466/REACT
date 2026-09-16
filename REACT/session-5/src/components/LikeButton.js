import React, { useState } from 'react';

// Task 1: LikeButton component with button and count; increments count on click
function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="component-card">
      <div className="card-header">
        <span className="task-pill">Task 1</span>
        <h3>Like Button</h3>
      </div>
      <p className="card-subtext">Clicking button updates the display count in real-time</p>

      <div className="action-row">
        <button
          className="simple-like-btn"
          onClick={() => setCount(prev => prev + 1)}
        >
          👍 Like
        </button>
        <div className="count-display">
          <span>Total Likes:</span>
          <strong>{count}</strong>
        </div>
      </div>
    </div>
  );
}

export default LikeButton;
