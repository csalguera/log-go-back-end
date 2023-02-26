'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.Profile, {
        as: 'profile',
        foreignKey: 'profileMovieId'
      })
    }
  }
  Movie.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profileMovieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};