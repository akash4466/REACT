document.getElementById('colorInput').addEventListener('input',
  (e) => {
  document.getElementById('moodbox').style.backgroundColor = e.target.value;
});

