document.getElementById('cart').addEventListener('click',
  e => {
  if(e.target.classList.contains('x')) e.target.parentElement.remove();
});
document.getElementById('add-random').addEventListener('click',
  () => {
  document.getElementById('cart').innerHTML += '<div class="card">New Item <button class="x">X</button></div>';
});

