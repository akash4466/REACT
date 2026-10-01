import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();

  return (
    <div className="page-container">
      <div className="notfound-card">
        <h1 className="notfound-code">404 - Page Not Found</h1>
        <p className="notfound-desc">
          The page you requested at <code>{location.pathname}</code> does not exist or has been moved.
        </p>
        <div className="notfound-tip">
          <span>Check the URL for typing mistakes or return to the store catalog.</span>
        </div>
        <div className="notfound-actions">
          <Link to="/" className="btn-primary-fk">
            Back to Home
          </Link>
          <Link to="/deals" className="btn-secondary-fk">
            View Today's Deals
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
