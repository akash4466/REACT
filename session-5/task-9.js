function createLikeButton(label,
  color) {
  const btn = document.createElement('button');
btn.innerText = label;
btn.style.backgroundColor = color;
btn.style.color = 'white';
btn.style.padding = '8px 16px';
btn.style.border = 'none';
btn.style.borderRadius = '4px';
return btn;
}
document.body.appendChild(createLikeButton('Like',
  'red'));

