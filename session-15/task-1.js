const products = [{name: 'A',
  price: 10,
  isInStock: true},
  {name: 'B',
  price: 20,
  isInStock: false}];
const inStock = products.filter(p => p.isInStock);

