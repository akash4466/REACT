const getFollowersCount = new Promise(resolve => {
  setTimeout(() => resolve(Math.floor(Math.random() * 4001) + 1000),
  1000);
});
getFollowersCount.then(count => console.log(`You have ${count} new followers`));

