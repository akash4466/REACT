import React, { useState } from 'react';

// Task 4: Zomato-style rating selector displaying 5 stars and highlighting all stars up to selected one
function RatingSelector({ restaurantName = 'Biryani Blues' }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const starLabels = ['', 'Poor', 'Average', 'Good', 'Very Good', 'Excellent!'];

  return (
    <div className="component-card rating-selector-card">
      <h3>4. Zomato Rating Selector</h3>
      <p className="card-desc">Click any star to highlight all stars up to that rating</p>

      <div className="restaurant-box">
        <span className="restaurant-name">{restaurantName}</span>
        <div className="stars-row">
          {[1, 2, 3, 4, 5].map(starNum => {
            const isHighlighted = (hoverRating || rating) >= starNum;
            return (
              <button
                key={starNum}
                type="button"
                className={`star-btn ${isHighlighted ? 'active' : ''}`}
                onClick={() => setRating(starNum)}
                onMouseEnter={() => setHoverRating(starNum)}
                onMouseLeave={() => setHoverRating(0)}
                aria-label={`Rate ${starNum} stars`}
              >
                ★
              </button>
            );
          })}
        </div>

        <div className="rating-feedback">
          {rating > 0 ? (
            <span className="rating-text">
              You rated: <strong>{rating} / 5</strong> ({starLabels[rating]})
            </span>
          ) : (
            <span className="rating-prompt">Tap a star to rate your food experience</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default RatingSelector;
