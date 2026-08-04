function fetchSongLyrics(song,
  callback) {
  setTimeout(() => callback(`Lyrics for ${song}`),
  1000);
} fetchSongLyrics('Song 1',
  console.log);

