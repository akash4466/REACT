function addPlaylistLink(linkObj) {
  const links = JSON.parse(localStorage.getItem('myLinks') || '[]');
links.push(linkObj);
localStorage.setItem('myLinks',
  JSON.stringify(links));
}

