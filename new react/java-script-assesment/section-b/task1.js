const restaurantName = 'Spice Garden';
const cuisineType = 'Indian';
let averageRating = 4.5;
let isOpen = true;

const openStatus = isOpen ? 'Open Now' : 'Closed';

const profileString = `${restaurantName} | ${cuisineType} | Rating: ${averageRating} | ${openStatus}`;
console.log(profileString);

const restaurantDetails = {
  name: restaurantName,
  cuisine: cuisineType,
  rating: averageRating,
  isOpen: isOpen
};

const jsonString = JSON.stringify(restaurantDetails);
console.log(jsonString);
