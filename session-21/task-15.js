function validateLink(url) {
  if (!url.startsWith('https://') || (!url.includes('spotify.com') && !url.includes('youtube.com'))) {
  document.getElementById('err').innerText = 'Invalid URL';
}
} document.getElementById('f').onsubmit = e => {
  e.preventDefault();
validateLink(document.getElementById('url').value);
};

