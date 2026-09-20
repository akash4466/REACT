const menu = [
  { name: 'Paneer Tikka', price: 180, category: 'Food', isVegetarian: true },
  { name: 'Chicken Biryani', price: 250, category: 'Food', isVegetarian: false },
  { name: 'Cold Coffee', price: 90, category: 'Beverage', isVegetarian: true },
  { name: 'Mutton Curry', price: 320, category: 'Food', isVegetarian: false },
  { name: 'Masala Dosa', price: 120, category: 'Food', isVegetarian: true },
  { name: 'Fresh Lime Soda', price: 60, category: 'Beverage', isVegetarian: true }
];

const vegetarianDishes = menu.filter(dish => dish.isVegetarian);
console.log('Vegetarian Dishes', vegetarianDishes);

const formattedMenu = menu.map(dish => `${dish.name} - Rs ${dish.price}`);

const totalPrice = menu.reduce((acc, dish) => acc + dish.price, 0);

console.log(`Count of Vegetarian Dishes: ${vegetarianDishes.length}`);
console.log('Formatted Menu', formattedMenu);
console.log(`Total Price: Rs ${totalPrice}`);
