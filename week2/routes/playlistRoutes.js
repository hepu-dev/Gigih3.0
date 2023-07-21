// routes/playlistRoutes.js
const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlistController");

// Fungsi Add song pada playlist
router.post("/", playlistController.addSong);

// Fungsi mainkan lagu
router.put("/:songIndex/play", playlistController.playSong);

// Tampilkan list lagu dalam playlist
router.get("/", playlistController.getPlaylist);

// Tampilkan lagu yang paling banyak diputar
router.get("/mostplayed", playlistController.getMostPlayedSongs);

module.exports = router;
