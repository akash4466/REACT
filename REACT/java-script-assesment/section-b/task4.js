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
    statusDiv.textContent = '';
    renderRestaurants(users);
  } catch (error) {
    statusDiv.textContent = 'Error loading restaurants. Please try again later.';
    statusDiv.className = 'error';
    console.error(error);
  }
}

function renderRestaurants(restaurants) {
  const savedFavouriteId = localStorage.getItem('favouriteRestaurantId');
  
  restaurants.forEach(restaurant => {
    const li = document.createElement('li');
    li.textContent = restaurant.name;
    li.dataset.id = restaurant.id;
    
    if (savedFavouriteId === String(restaurant.id)) {
      li.classList.add('favourite');
    }
    
    li.addEventListener('click', () => {
      const allItems = document.querySelectorAll('#restaurantList li');
      allItems.forEach(item => item.classList.remove('favourite'));
      
      li.classList.add('favourite');
      localStorage.setItem('favouriteRestaurantId', restaurant.id);
    });
    
    restaurantList.appendChild(li);
  });
}

fetchRestaurants();
