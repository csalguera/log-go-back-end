const { Movie } = require('../models')

const create = async (req, res) => {
  try {
    req.body.profileMovieId = req.user.profile.id
    const movie = await Movie.create(req.body)
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const movies = await Movie.findAll({
      include: 'profile'
    })
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id)
    movie.set(req.body)
    await movie.save()
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id)
    movie.destroy()
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteMovie,
}
