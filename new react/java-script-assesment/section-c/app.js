const state = {
  menu: [
    { id: 1, name: 'Margherita Pizza', price: 299, category: 'Food', isVegetarian: true },
    { id: 2, name: 'Chicken Burger', price: 199, category: 'Food', isVegetarian: false },
    { id: 3, name: 'French Fries', price: 99, category: 'Food', isVegetarian: true },
    { id: 4, name: 'Pasta Alfredo', price: 249, category: 'Food', isVegetarian: true },
    { id: 5, name: 'Chocolate Shake', price: 149, category: 'Beverage', isVegetarian: true },
    { id: 6, name: 'BBQ Wings', price: 279, category: 'Food', isVegetarian: false }
  ],
  cart: []
};

const menuGrid = document.getElementById('menuGrid');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');
const cartBadge = document.getElementById('cartBadge');
const emptyCartMsg = document.getElementById('emptyCartMsg');
const restaurantSelect = document.getElementById('restaurantSelect');
const restaurantLoading = document.getElementById('restaurantLoading');
const restaurantError = document.getElementById('restaurantError');

const btnBrowse = document.getElementById('btnBrowse');
const btnCart = document.getElementById('btnCart');
const btnClearCart = document.getElementById('btnClearCart');
const sectionBrowse = document.getElementById('sectionBrowse');
const sectionCart = document.getElementById('sectionCart');

function init() {
  loadCart();
  renderMenu();
  updateCartUI();
  setupNavigation();
  fetchRestaurants();
}

function setupNavigation() {
  btnBrowse.addEventListener('click', () => {
    btnBrowse.classList.add('active');
    btnCart.classList.remove('active');
    sectionBrowse.classList.add('active');
    sectionCart.classList.remove('active');
  });

  btnCart.addEventListener('click', () => {
    btnCart.classList.add('active');
    btnBrowse.classList.remove('active');
    sectionCart.classList.add('active');
    sectionBrowse.classList.remove('active');
  });

  btnClearCart.addEventListener('click', () => {
    state.cart = [];
    saveCart();
    updateCartUI();
  });
}

function renderMenu() {
  menuGrid.innerHTML = '';
  state.menu.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const iconClass = item.isVegetarian ? 'veg-icon' : 'non-veg-icon';
    
    card.innerHTML = `
      <div class="card-header">
        <div>
          <div class="dish-name">${item.name}</div>
          <div class="dish-category">${item.category}</div>
        </div>
        <div class="${iconClass}"></div>
      </div>
      <div class="dish-price">Rs ${item.price}</div>
      <button class="btn-add" data-id="${item.id}">Add to Cart</button>
    `;
    
    const addBtn = card.querySelector('.btn-add');
    addBtn.addEventListener('click', () => addToCart(item));
    
    menuGrid.appendChild(card);
  });
}

function addToCart(menuItem) {
  const existingItem = state.cart.find(item => item.id === menuItem.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({ ...menuItem, quantity: 1 });
  }
  
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(item => item.id !== id);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  cartList.innerHTML = '';
  
  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  cartBadge.textContent = totalItems;
  
  if (state.cart.length === 0) {
    emptyCartMsg.style.display = 'block';
    cartList.style.display = 'none';
    cartTotal.textContent = 'Rs 0';
  } else {
    emptyCartMsg.style.display = 'none';
    cartList.style.display = 'block';
    
    let totalCost = 0;
    
    state.cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      
      const itemTotal = item.price * item.quantity;
      totalCost += itemTotal;
      
      li.innerHTML = `
        <div class="cart-item-details">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">Rs ${item.price} each</span>
        </div>
        <div class="cart-item-actions">
          <span class="cart-qty">x${item.quantity}</span>
          <button class="btn-remove" data-id="${item.id}">Remove</button>
        </div>
      `;
      
      const removeBtn = li.querySelector('.btn-remove');
      removeBtn.addEventListener('click', () => removeFromCart(item.id));
      
      cartList.appendChild(li);
    });
    
    cartTotal.textContent = `Rs ${totalCost}`;
  }
}

function saveCart() {
  localStorage.setItem('capstoneCart', JSON.stringify(state.cart));
}

function loadCart() {
  const savedCart = localStorage.getItem('capstoneCart');
  if (savedCart) {
    try {
      state.cart = JSON.parse(savedCart);
    } catch (e) {
      state.cart = [];
    }
  }
}

async function fetchRestaurants() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network error');
    
    const users = await response.json();
    
    restaurantLoading.style.display = 'none';
    restaurantSelect.style.display = 'inline-block';
    
    users.forEach(user => {
      const option = document.createElement('option');
      option.value = user.id;
      option.textContent = user.name;
      restaurantSelect.appendChild(option);
    });
    
  } catch (error) {
    restaurantLoading.style.display = 'none';
    restaurantError.style.display = 'inline-block';
  }
}

init();
