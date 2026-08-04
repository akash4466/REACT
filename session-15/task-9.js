const posts = [{likes: 10},
  {likes: 20}];
const totalLikes = posts.reduce((sum,
  p) => sum + p.likes,
  0);

