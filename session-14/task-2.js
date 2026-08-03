function validateSpotifyURL(url) { if (!url.startsWith('https://open.spotify.com/')) throw new Error('Invalid Spotify URL'); }
