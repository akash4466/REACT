const getFollowersSummary = (...followers) => `Total followers: ${followers.reduce((a, b) => a + b, 0)}`; console.log(getFollowersSummary(100, 200, 300));
