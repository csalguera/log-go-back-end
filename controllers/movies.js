const { Movie } = require('../models')

const create = async (req, res) => {
  try {
    req.body.profileId = req.user.profile.id
    const movie = await Movie.create(req.body)
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
}
