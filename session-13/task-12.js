class Playlist { constructor(name, songs) { this.name = name; this.songs = songs; } addSong(s) { this.songs.push(s); } } const p = new Playlist('P', []); p.addSong('S1'); console.log(p);
