const { Book } = require('../models')

const create = async (req, res) => {
  try {
    req.body.profileBookId = req.user.profile.id
    const book = await Book.create(req.body)
    res.status(201).json(book)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: 'profile'
    })
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id)

    if (book.profileBookId !== req.user.profile.id) {
      return res.status(401).json({ error: 'You are not authorized to update this resource.' })
    }

    book.set(req.body)
    await book.save()
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id)

    if (book.profileBookId !== req.user.profile.id) {
      return res.status(401).json({ error: 'You are not authorized to delete this resource.' })
    }

    book.destroy()
    res.status(200).json(book)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addPhoto = async (req, res) => {
  try {
    const imageFile = req.files.photo.path
    const movie = await Movie.findByPk(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    movie.photo = image.url
    await movie.save()
    res.status(201).json(movie.photo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteBook,
  addPhoto,
}
