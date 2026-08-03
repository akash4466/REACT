export const formatPrice = (price) => '₹' + price.toFixed(2); export const getDiscountedPrice = (price, d) => price - (price * d/100);
