const cart = [ {
  productName: 'A',
  price: 10,
  quantity: 2
},
  {
  productName: 'B',
  price: 20,
  quantity: 1
},
  {
  productName: 'C',
  price: 15,
  quantity: 3
},
  {
  productName: 'D',
  price: 5,
  quantity: 4
} ];
for(let i=0;
i<cart.length;
i++) {
  console.log(cart[i].productName,
  cart[i].price * cart[i].quantity);
}

