const express = require("express");
const movieModel = require("../Schema/movie.schema");
const movieRoutes = express.Router();

movieRoutes.post("/", async (req, res) => {
  try {
    await movieModel.insertMany(req.body);

    res.status(201).send("Movie added");
  } catch (error) {
    res.status(400).json({ msg: "something went wrong" });
  }
});

movieRoutes.get("/", async (req, res) => {
  try {
    const { q, rating, sortBy, page = 1, limit = 2 } = req.query;
    const filter = {};

    if (q) {
      filter.title = { $regex: q, $options: "i" };
    }
    if (rating) {
      filter.rating = rating;
    }

    let movies = await movieModel
      .find(filter)
      .sort(sortBy ? { [sortBy]: 1 } : {})
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
     
     

    res.json({ msg: "All Movies info received", movies });
  } catch (error) {
    res.status(500).send(err);
  }
});

movieRoutes.get("/:id", async (req, res) => {
  try {
    let movie = await movieModel.findByIdAndUpdate({ _id: req.params.id });

    res.json({ msg: "Movie info received", movie });
  } catch (error) {
    res.status(400).send(error);
  }
});
movieRoutes.put("/:id", async (req, res) => {
  try {
    let movie = await movieModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!movie) {
      return res.status(404).json({ msg: "Movie not found" });
    }

    console.log(movie, req.body);
    res.json({ msg: "Movie info updated", movie });
  } catch (error) {
    res.status(400).send(error);
  }
});

movieRoutes.delete("/:id", async (req, res) => {
  try {
    await movieModel.findByIdAndDelete({ _id: req.params.id });

    res.json({ msg: "Movie deleted" });
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = movieRoutes;
