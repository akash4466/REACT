import React from 'react';
import TrendingSongs from './components/TrendingSongs';
import IPLScores from './components/IPLScores';
import BuggyFetchFix from './components/BuggyFetchFix';
import './App.css';

/**
 * Session 12: Network Error Handling, Retry & Status Code Checking
 * Task 1: TrendingSongs with fetch(), display 3 titles or 'Error loading data'
 * Task 2: 'Reload' button that retries API call with try/catch
 * Task 3: IPLScores verifying status !== 200, throwing 'Error loading scores'
 * Task 4: Fix buggy useEffect fetch handling network errors & non-200 HTTP codes
 */
function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="session-badge">⚡ Session 12 • Error Handling &amp; Fetch Resilience</div>
        <h1>API Robustness &amp; Error Boundaries</h1>
        <p className="subtitle">
          Handling network drops, verifying HTTP status codes with <code>response.ok</code>, graceful user notifications, and manual retry triggers.
        </p>
      </header>

      <main className="components-grid">
        {/* Tasks 1 & 2 */}
        <TrendingSongs />

        {/* Task 3 */}
        <IPLScores />

        {/* Task 4 */}
        <BuggyFetchFix />
      </main>

      <footer className="app-footer">
        <p>© 2026 Session 12 • Bulletproof REST Fetching &amp; Status Validation</p>
      </footer>
    </div>
  );
}

export default App;
