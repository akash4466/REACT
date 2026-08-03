const MAX_POSTS = 100;
try {
  MAX_POSTS = 200;
} catch (error) {
  console.log(error.message);
}
