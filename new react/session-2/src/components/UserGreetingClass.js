import React, { Component } from 'react';

// Task 3: Class component equivalent taking username prop and displaying 'Hello, {username}!'
class UserGreetingClass extends Component {
  render() {
    const { username } = this.props;
    return (
      <div className="greeting-box class-box">
        <span className="tag class-tag">Class Component</span>
        <h3>Hello, {username}!</h3>
        <p className="subtext">Rendered using React.Component class syntax and this.props.</p>
      </div>
    );
  }
}

export default UserGreetingClass;
