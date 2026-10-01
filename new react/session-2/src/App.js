import React from 'react';
import UserGreeting from './components/UserGreeting';
import UserGreetingClass from './components/UserGreetingClass';
import MiniProfile from './components/MiniProfile';
import './App.css';

function App() {
  const myName = "Alex Dev";

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="badge">Session 2 • JSX & Components</div>
        {/* Task 1: JSX heading saying 'Welcome to React JSX!' */}
        <h1>Welcome to React JSX!</h1>
        <p className="subtitle">Exploring Functional vs Class Components & Instagram-Style Mini Profile</p>
      </header>

      <section className="section comparison-section">
        <h2>Comparison: Functional vs Class Component</h2>
        <div className="cards-grid">
          {/* Task 2: Functional component rendered with username prop */}
          <UserGreeting username={myName} />

          {/* Task 3: Class component rendered with username prop */}
          <UserGreetingClass username={myName} />
        </div>
      </section>

      <section className="section profile-section">
        <h2>Mini Instagram Profile (Valid Closed JSX Tags)</h2>
        {/* Task 4 & 5: MiniProfile with display picture, name, status */}
        <MiniProfile
          username="alex_codes"
          name="Alex Dev"
          profilePic="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
          status="🚀 Building reactive web experiences with React & JSX | Coding every day ✨"
        />
      </section>
    </div>
  );
}

export default App;
