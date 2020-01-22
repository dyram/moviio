"use strict";
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define(
    "Movies",
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.TEXT,
      cast: DataTypes.TEXT,
      director: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      uid: DataTypes.INTEGER
    },
    {}
  );
  Movies.associate = function(models) {
    // associations can be defined here
  };
  return Movies;
};
