function deletePlaylistLink(index) {
  const links = JSON.parse(localStorage.getItem('myPlaylists') || '[]');
links.splice(index,
  1);
localStorage.setItem('myPlaylists',
  JSON.stringify(links));
}

