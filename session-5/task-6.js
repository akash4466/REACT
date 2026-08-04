const formatFollowers = (count) => {
  if (count >= 1000000) {
  return (count / 1000000).toFixed(1) + 'M';
} else if (count >= 1000) {
  return (count / 1000).toFixed(1) + 'K';
}
  return count.toString();
};
console.log(formatFollowers(1500));
console.log(formatFollowers(2000000));

