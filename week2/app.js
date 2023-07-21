const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const playlistRoutes = require("./routes/playlistRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/playlist", playlistRoutes);

const PORT = 1001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
