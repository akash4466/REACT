import React from 'react';

// Task 2: Functional component taking username prop and displaying 'Hello, {username}!' using JSX
function UserGreeting({ username }) {
  return (
    <div className="greeting-box functional-box">
      <span className="tag">Functional Component</span>
      <h3>Hello, {username}!</h3>
      <p className="subtext">Rendered with a modern JavaScript functional component.</p>
    </div>
  );
}

export default UserGreeting;
