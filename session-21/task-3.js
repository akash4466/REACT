function addPlaylistLink(linkObj) {
  const links = JSON.parse(localStorage.getItem('myPlaylists') || '[]');
links.push(linkObj);
localStorage.setItem('myPlaylists',
  JSON.stringify(links));
}

