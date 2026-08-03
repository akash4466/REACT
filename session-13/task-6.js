class Playlist { constructor(name, songs) { this.name = name; this.songs = songs; } getSongCount() { return this.songs.length; } } console.log(new Playlist('Pop', ['A']).getSongCount());
