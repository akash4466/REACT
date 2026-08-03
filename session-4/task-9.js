const statuses = ['Preparing', 'Out for delivery', 'Delivered'];
let i = 0;
do {
  console.log(`Order status: ${statuses[i]}`);
  i++;
} while (i < statuses.length);
