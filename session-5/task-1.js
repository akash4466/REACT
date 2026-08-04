function createSpotifyButton(label,
  color) {
  const btn = document.createElement('button');
btn.innerText = label;
btn.style.backgroundColor = color;
btn.style.color = 'white';
btn.style.padding = '10px 20px';
btn.style.border = 'none';
btn.style.borderRadius = '5px';
return btn;
}
document.body.appendChild(createSpotifyButton('Play',
  '#1DB954'));

