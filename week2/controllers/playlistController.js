// controllers/playlistController.js
const Playlist = require("../models/playlistModel");

// inisialisasi model playlist
const playlist = new Playlist();

// Fungsi Add song pada playlist
const addSong = (req, res) => {
  const { title, artists, url } = req.body;
  if (!title || !artists || !url) {
    return res.status(400).json({ error: "Title, Artists, and URL are required" });
  }

  playlist.addSong(title, artists, url);
  res.status(201).json({ message: "Berhasil memasukkan lagu ke playlist" });
};

// Fungsi mainkan lagu
const playSong = (req, res) => {
  const songIndex = req.params.songIndex;
  if (!playlist.getSongs()[songIndex]) {
    return res.status(404).json({ error: "Lagu tidak ditemukan di playlist" });
  }

  playlist.playSong(songIndex);
  res.status(200).json({ message: "Putar lagu dari playlist" });
};

// Tampilkan list lagu dalam playlist
const getPlaylist = (req, res) => {
  res.status(200).json(playlist.getSongs());
};

// Tampilkan lagu yang paling banyak diputar
const getMostPlayedSongs = (req, res) => {
  res.status(200).json(playlist.getMostPlayedSongs());
};

module.exports = {
  addSong,
  playSong,
  getPlaylist,
  getMostPlayedSongs,
};
