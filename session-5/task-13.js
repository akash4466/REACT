function createPlaylistButton(songName, themeColor) {
  const btn = document.createElement('button');
  btn.innerText = songName;
  btn.style.backgroundColor = themeColor;
  btn.style.color = 'white';
  btn.style.padding = '10px';
  btn.style.margin = '5px';
  btn.style.border = 'none';
  btn.style.borderRadius = '20px';
  return btn;
}
document.body.appendChild(createPlaylistButton('Kesariya', '#ff9933'));
document.body.appendChild(createPlaylistButton('Tum Hi Ho', '#0099ff'));
document.body.appendChild(createPlaylistButton('Chaleya', '#ff0066'));
