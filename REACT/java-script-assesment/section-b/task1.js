// Task 1: Restaurant Profile Card

// Declare variables
const restaurantName = 'Spice Garden';
const cuisineType = 'Indian';
let averageRating = 4.5;
let isOpen = true;

// Use a ternary operator for the open status
const openStatus = isOpen ? 'Open Now' : 'Closed';

// Use a template literal to build the formatted profile string
const profileString = `${restaurantName} | ${cuisineType} | Rating: ${averageRating} | ${openStatus}`;
console.log('--- Formatted Profile ---');
console.log(profileString);

// Serialize the restaurant details into a JSON string
const restaurantDetails = {
  name: restaurantName,
  cuisine: cuisineType,
  rating: averageRating,
  isOpen: isOpen
};

const jsonString = JSON.stringify(restaurantDetails);
console.log('\n--- JSON Serialized ---');
console.log(jsonString);
