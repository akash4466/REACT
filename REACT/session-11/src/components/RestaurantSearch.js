import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RestaurantSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const defaultRestaurants = [
    { id: 1, name: 'Toit Brewpub', cuisine: 'Continental', rating: '4.7', city: 'Bengaluru' },
    { id: 2, name: 'Punjab Grill', cuisine: 'North Indian', rating: '4.6', city: 'Mumbai' },
    { id: 3, name: 'Barbeque Nation', cuisine: 'Buffet', rating: '4.4', city: 'Delhi' },
    { id: 4, name: 'Bawarchi Restaurant', cuisine: 'Hyderabadi Biryani', rating: '4.8', city: 'Hyderabad' },
    { id: 5, name: 'Smoke House Deli', cuisine: 'European', rating: '4.5', city: 'Kolkata' },
    { id: 6, name: 'Haldirams Sweets', cuisine: 'Street Food', rating: '4.3', city: 'Pune' },
    { id: 7, name: 'The Bombay Canteen', cuisine: 'Contemporary Indian', rating: '4.9', city: 'Mumbai' },
    { id: 8, name: 'Peter Cat', cuisine: 'Continental', rating: '4.7', city: 'Kolkata' }
  ];

  useEffect(() => {
    const fetchRestaurants = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          'https://mocki.io/v1/570c5e5c-8c8b-4c1e-8c8b-4c1e8c8b4c1e',
          { timeout: 4000 }
        );

        if (Array.isArray(response.data) && response.data.length > 0) {
          setAllRestaurants(response.data);
          setFilteredRestaurants(response.data);
        } else {
          setAllRestaurants(defaultRestaurants);
          setFilteredRestaurants(defaultRestaurants);
        }
      } catch (err) {
        setAllRestaurants(defaultRestaurants);
        setFilteredRestaurants(defaultRestaurants);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (!term.trim()) {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter((resto) =>
        resto.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  };

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>Restaurant Directory</h3>
      </div>
      <p className="card-subtext">
        Search restaurants by name in real time.
      </p>

      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants (e.g. Punjab Grill, Toit)..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={() => {
              setSearchTerm('');
              setFilteredRestaurants(allRestaurants);
            }}
          >
            Clear
          </button>
        )}
      </div>

      <div className="results-header">
        <span>
          Showing <strong>{filteredRestaurants.length}</strong> matching restaurants
          {searchTerm && ` for "${searchTerm}"`}
        </span>
      </div>

      {isLoading ? (
        <div className="status-box loading-box">
          <span className="spinner"></span>
          <p>Fetching restaurant directory...</p>
        </div>
      ) : filteredRestaurants.length === 0 ? (
        <div className="no-results-box">
          <p>No restaurants found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((resto) => (
            <div key={resto.id} className="restaurant-item">
              <div className="resto-left">
                <span className="resto-name">{resto.name}</span>
                <span className="resto-cuisine">{resto.cuisine || 'Multi-cuisine'}</span>
              </div>
              <div className="resto-right">
                <span className="resto-rating">{resto.rating || '4.5'} / 5</span>
                {resto.city && <span className="resto-city">{resto.city}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RestaurantSearch;
