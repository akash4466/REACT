const orderForm = document.getElementById('orderForm');
const dishNameInput = document.getElementById('dishName');
const quantityInput = document.getElementById('quantity');
const errorMessage = document.getElementById('errorMessage');
const cartList = document.getElementById('cartList');

orderForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const dishName = dishNameInput.value.trim();
  const quantity = quantityInput.value.trim();

  if (dishName === '' || quantity === '') {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';

    const li = document.createElement('li');
    li.textContent = `${dishName} - Qty: ${quantity}`;
    cartList.appendChild(li);

    dishNameInput.value = '';
    quantityInput.value = '';
  }
});
