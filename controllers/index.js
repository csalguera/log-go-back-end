const { Movie, Book } = require('../models')

const index = async (req, res) => {
  try {
    const [movies, books] = await Promise.all([
      Movie.findAll({
        include: 'profile',
        order: [[ 'createdAt', 'DESC' ]],
        limit: 5,
      }),
      Book.findAll({
        include: 'profile',
        order: [[ 'createdAt', 'DESC' ]],
        limit: 5,
      }),
    ])
    const results = { movies, books }
    res.status(200).json(results)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  index,
}
