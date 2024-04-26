const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// Ici on définit les routes associées aux fonctions du bookController
router.post("/add-movie", movieController.addMovie);
router.get("/all-movie", movieController.findMovie);
router.get("/movie-title/:title", movieController.findMovieByTitle);
router.put("/update-movie/:id", movieController.updateMovieById);
router.delete("/delete-movie/:id", movieController.deleteMovieById)

module.exports = router;
