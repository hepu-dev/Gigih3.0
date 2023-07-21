
### For testing, I recommend following the suggestions below
1. Clone this repository
2. Open it using a code editor
3. Run the command `npm install` in the terminal
4. Run the command `npm nodemon` in the terminal
5. To run the project, use `npm start` command
6. Open Postman, then import the available collection

<br/>


## Routes Documentation

### `GET /playlist`

Retrieves the entire playlist.

### `GET /playlist/:id`

Retrieves a song from the playlist by its ID.

### `POST /playlist`

Adds a new song to the playlist.

##### Request Body

- `title` : Title of the song
- `artists`: Array of artist the song
- `url`: URL the song

### `PUT /playlist/:id/play`

Increments the play count of a song in the playlist.
