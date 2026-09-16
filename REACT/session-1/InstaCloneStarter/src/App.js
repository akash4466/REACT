import React from 'react';
import TrendingSong from './TrendingSong';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="badge">Session 1 • InstaCloneStarter</div>
        <h1>Welcome to My React Zomato App</h1>
        <TrendingSong />
      </header>

      <main className="explanation-card">
        <h3>💡 Understanding React's Virtual DOM</h3>
        <p>
          React's <strong>Virtual DOM</strong> is an in-memory representation of real DOM elements.
          When state or props change, React runs a fast "diffing" algorithm to figure out the exact minimal changes required.
          It then batches and applies only those updates to the real DOM, avoiding expensive browser layout recalculations and repaints.
        </p>
      </main>
    </div>
  );
}

export default App;
