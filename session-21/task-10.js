function manageLink(linkObj,
  mode,
  index = -1) {
  const links = JSON.parse(localStorage.getItem('myPlaylists') || '[]');
if (mode === 'add') links.push(linkObj);
else if (mode === 'edit' && index > -1) links[index] = linkObj;
localStorage.setItem('myPlaylists',
  JSON.stringify(links));
}

