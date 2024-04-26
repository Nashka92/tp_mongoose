const Movie = require("../movie");

// Création d'un Nouveau Film
const addMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).send("Le film a été ajouté avec succès !");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Affichage de Tous les Films
const findMovie = async (req, res) => {
  try {
    const allMovie = await Movie.find();
    res.status(200).send(allMovie);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Recherche d'un Film par Titre
const findMovieByTitle = async (req, res) => {
  try {
    const titleMovie = await Movie.findOne({ title: req.params.title });
    res.status(200).send(titleMovie);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Mise à Jour d'un Film
const updateMovieById = async (req, res) => {
  try {
    const updateMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(201).send(updateMovie);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Suppression d'un Film
const deleteMovieById = async (req, res) => {
  try {
    await Movie.findByIdAndDelete({ _id: req.params.id });
    res.send("Le film a bien été supprimé !");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addMovie,
  findMovie,
  findMovieByTitle,
  updateMovieById,
  deleteMovieById,
};
