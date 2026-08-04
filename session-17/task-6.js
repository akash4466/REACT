document.getElementById('cart').addEventListener('click',
  e => {
  if (e.target.classList.contains('x')) e.target.parentElement.remove();
});

