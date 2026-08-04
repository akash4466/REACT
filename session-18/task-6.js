function addToCart(productName,
  quantity) {
  if (quantity < 0) console.error('Quantity negative');
else if (quantity === 0) console.warn('Quantity is zero');
else console.log('Success: ' + productName + ' added');
} addToCart('Phone',
  1);
addToCart('Phone',
  0);
addToCart('Phone',
  -1);

