function showMenuItem(name, price) {
  const div = document.createElement('div');
  div.style.border = '1px solid #ddd';
  div.style.padding = '10px';
  div.style.margin = '10px 0';
  div.innerHTML = `<h3>${name}</h3><p>Price: ₹${price}</p>`;
  return div;
}
document.body.appendChild(showMenuItem('Pizza', 299));
document.body.appendChild(showMenuItem('Burger', 149));
document.body.appendChild(showMenuItem('Fries', 99));
