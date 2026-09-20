const statusDiv = document.getElementById('status');
const foodList = document.getElementById('foodList');

async function getFoods() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    statusDiv.textContent = '';
    renderFoods(data);
  } catch (err) {
    statusDiv.textContent = 'Error fetching data';
    statusDiv.className = 'error';
  }
}

function renderFoods(foods) {
  const favs = localStorage.getItem('favourites');
  let favouritesArray = [];
  if (favs) {
    favouritesArray = favs;
  }

  foods.forEach(food => {
    const li = document.createElement('li');
    li.textContent = food.title;

    if (favouritesArray.includes(food.id)) {
      li.classList.add('favourite');
    }

    const btn = document.createElement('button');
    btn.textContent = 'Add to Favourites';
    btn.addEventListener('click', () => {
      favouritesArray.push(food.id);
      localStorage.setItem('favourites', favouritesArray);
      li.classList.add('favourite');
    });

    li.appendChild(btn);
    foodList.appendChild(li);
  });
}

getFoods();
