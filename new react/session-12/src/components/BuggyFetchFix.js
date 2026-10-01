import React, { useState, useEffect } from 'react';

function BuggyFetchFix() {
  const [data, setData] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [errorDetails, setErrorDetails] = useState('');
  const [loading, setLoading] = useState(true);
  const [urlMode, setUrlMode] = useState('valid');

  const executeSafeFetch = async () => {
    setLoading(true);
    setHasError(false);
    setErrorDetails('');
    setData(null);

    let targetUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    if (urlMode === 'invalid') targetUrl = 'https://jsonplaceholder.typicode.com/invalidurl';
    if (urlMode === 'broken') targetUrl = 'https://this-domain-does-not-exist-999.invalid';

    try {
      const response = await fetch(targetUrl);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText || 'Resource Not Found'}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
      setHasError(false);
    } catch (err) {
      console.error('Fetch caught error:', err.message);
      setHasError(true);
      setErrorDetails(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    executeSafeFetch();
  }, [urlMode]);

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Safe Resource Loader</h3>
      </div>
      <p className="card-subtext">
        Validates HTTP status codes and handles network exceptions.
      </p>

      <div className="test-suite-bar">
        <span className="suite-title">Request Scenarios:</span>
        <button
          type="button"
          className={`test-btn ${urlMode === 'valid' ? 'active' : ''}`}
          onClick={() => setUrlMode('valid')}
        >
          Success (200 OK)
        </button>
        <button
          type="button"
          className={`test-btn ${urlMode === 'invalid' ? 'active' : ''}`}
          onClick={() => setUrlMode('invalid')}
        >
          Not Found (404)
        </button>
        <button
          type="button"
          className={`test-btn ${urlMode === 'broken' ? 'active' : ''}`}
          onClick={() => setUrlMode('broken')}
        >
          Network Failure
        </button>
      </div>

      {loading && (
        <div className="status-banner loading">
          <span className="spinner-dots"></span>
          <span>Sending request ({urlMode})...</span>
        </div>
      )}

      {!loading && hasError && (
        <div className="status-banner error">
          <div className="error-text-wrap">
            <strong>Request Failed:</strong>
            <p>{errorDetails || 'Network or HTTP error detected and caught by response handler.'}</p>
          </div>
        </div>
      )}

      {!loading && !hasError && data && (
        <div className="status-banner success">
          <div className="error-text-wrap">
            <strong>Received Data:</strong>
            <p>Title: "{data.title}"</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuggyFetchFix;
