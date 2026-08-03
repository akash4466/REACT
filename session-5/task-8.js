const formatFollowers = (count) => {
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'K';
  }
  return count;
};
console.log(formatFollowers(1500));
