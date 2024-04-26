const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const movieRoutes = require("./routes/movieRoutes")

app.use(express.json());
app.use(movieRoutes);

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/movie-tp'); 

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});

app.listen(port, () => {
  console.log(`Server is listening at <http://localhost>:${port}`);
})