// task4.js

const statusDiv = document.getElementById('status');
const restaurantList = document.getElementById('restaurantList');

async function fetchRestaurants() {
  try {
    statusDiv.textContent = 'Loading restaurants...';
    statusDiv.className = '';
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const users = await response.json();
    
    // Clear loading message
    statusDiv.textContent = '';
    
    renderRestaurants(users);
  } catch (error) {
    statusDiv.textContent = 'Error loading restaurants. Please try again later.';
    statusDiv.className = 'error';
    console.error('Fetch error:', error);
  }
}

function renderRestaurants(restaurants) {
  const savedFavouriteId = localStorage.getItem('favouriteRestaurantId');
  
  restaurants.forEach(restaurant => {
    const li = document.createElement('li');
    li.textContent = restaurant.name;
    li.dataset.id = restaurant.id;
    
    // Check if this is the saved favourite
    if (savedFavouriteId === String(restaurant.id)) {
      li.classList.add('favourite');
    }
    
    // Add click event to save favourite
    li.addEventListener('click', () => {
      // Remove favourite class from all items
      const allItems = document.querySelectorAll('#restaurantList li');
      allItems.forEach(item => item.classList.remove('favourite'));
      
      // Add favourite class to clicked item
      li.classList.add('favourite');
      
      // Save to localStorage
      localStorage.setItem('favouriteRestaurantId', restaurant.id);
    });
    
    restaurantList.appendChild(li);
  });
}

// Initial fetch
fetchRestaurants();
