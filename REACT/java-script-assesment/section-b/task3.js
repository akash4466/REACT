// task3.js

const orderForm = document.getElementById('orderForm');
const dishNameInput = document.getElementById('dishName');
const quantityInput = document.getElementById('quantity');
const errorMessage = document.getElementById('errorMessage');
const cartList = document.getElementById('cartList');

orderForm.addEventListener('submit', function(event) {
  // Prevent default form submission behaviour (page reload)
  event.preventDefault();

  const dishName = dishNameInput.value.trim();
  const quantity = quantityInput.value.trim();

  // Validate that neither field is empty
  if (dishName === '' || quantity === '') {
    errorMessage.style.display = 'block';
  } else {
    // Hide error message if valid
    errorMessage.style.display = 'none';

    // Append new li to cart
    const li = document.createElement('li');
    li.textContent = `${dishName} - Qty: ${quantity}`;
    cartList.appendChild(li);

    // Clear input fields
    dishNameInput.value = '';
    quantityInput.value = '';
  }
});
