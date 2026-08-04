function validateUsername(username) {
  if (!/^[a-zA-Z0-9]+$/.test(username)) throw new Error('Invalid Username');
} try {
  validateUsername('user!');
} catch (e) {
  console.log(e.message);
}

