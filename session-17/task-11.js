document.getElementById('feed').addEventListener('click',
  e => {
  if (e.target.classList.contains('dismiss')) {
  const card = e.target.parentElement;
card.style.opacity = '0';
setTimeout(() => card.remove(),
  500);
}
});

