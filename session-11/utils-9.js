export const formatPrice = p => '₹'+p;
export default function getDiscountedPrice(p,
  d) {
  return p - p*d/100;
}

