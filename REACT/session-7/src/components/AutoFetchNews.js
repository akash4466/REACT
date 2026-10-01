import React, { useState, useEffect } from 'react';

function AutoFetchNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArticles = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Tech News Feed</h3>
      </div>
      <p className="card-subtext">
        Recent articles and updates.
      </p>

      <div className="news-action-bar">
        <button
          type="button"
          className="action-btn-primary"
          onClick={fetchArticles}
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Fetch Latest News'}
        </button>
      </div>

      <div className="news-articles-container">
        {loading && <p className="status-notice">Loading news feed...</p>}

        {!loading && articles.length === 0 && (
          <p className="empty-notice">No news loaded yet.</p>
        )}

        {!loading && articles.length > 0 && (
          <div className="news-grid">
            {articles.map((item) => (
              <div key={item.id} className="news-card">
                <span className="news-category">Article #{item.id}</span>
                <h4 className="news-title">{item.title}</h4>
                <p className="news-body">{item.body.slice(0, 90)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutoFetchNews;
