document.getElementById('wishlist').addEventListener('click',
  e => {
  if(e.target.classList.contains('remove')) e.target.parentElement.remove();
});
document.getElementById('add').addEventListener('click',
  () => {
  document.getElementById('wishlist').innerHTML += '<div class="card">New P <button class="remove">Remove</button></div>';
});

