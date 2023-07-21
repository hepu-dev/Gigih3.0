
## Routes Documentation

### `GET /playlist`

Retrieves the entire playlist.

### `GET /playlist/mostplayed`

Retrieves a song from the playlist by mostplayed song.

### `POST /playlist`

Adds a new song to the playlist.

##### Request Body

- `title` : Title of the song
- `artists`: Array of artist the song
- `url`: URL the song

### `PUT /playlist/:id/play`

Increments the play count of a song in the playlist.
