// Task 2: Menu Filter & Summary

// Create an array of at least 6 dish objects
const menu = [
  { name: 'Paneer Tikka', price: 180, category: 'Food', isVegetarian: true },
  { name: 'Chicken Biryani', price: 250, category: 'Food', isVegetarian: false },
  { name: 'Cold Coffee', price: 90, category: 'Beverage', isVegetarian: true },
  { name: 'Mutton Curry', price: 320, category: 'Food', isVegetarian: false },
  { name: 'Masala Dosa', price: 120, category: 'Food', isVegetarian: true },
  { name: 'Fresh Lime Soda', price: 60, category: 'Beverage', isVegetarian: true }
];

// Use filter() to extract only vegetarian dishes
const vegetarianDishes = menu.filter(dish => dish.isVegetarian);
console.log('--- Vegetarian Dishes ---');
console.log(vegetarianDishes);

// Use map() to produce an array of formatted strings
const formattedMenu = menu.map(dish => `${dish.name} - Rs ${dish.price}`);

// Use reduce() to calculate the total price of all dishes
const totalPrice = menu.reduce((acc, dish) => acc + dish.price, 0);

// Log the count of vegetarian dishes
console.log('\n--- Count of Vegetarian Dishes ---');
console.log(`There are ${vegetarianDishes.length} vegetarian dishes available.`);

// Log the formatted menu array
console.log('\n--- Formatted Menu ---');
console.log(formattedMenu);

// Log the total price
console.log('\n--- Total Price of All Menu Items ---');
console.log(`Rs ${totalPrice}`);
