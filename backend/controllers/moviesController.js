const model = require("../models");
const User = model.Users;
const Movie = model.Movies;

Movies = () => {};

Movies.getMovies = async uid => {
  let promise = await Movie.findAll();
  return promise;
};

Movies.addMovies = async (uid, name, desc, cast, director, rating, image) => {
  let promise = await Movie.create({
    uid: uid,
    name: name,
    description: desc,
    image: image,
    cast: cast,
    director: director,
    rating: rating
  });
  return promise;
};

module.exports = Movies;
