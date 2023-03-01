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

module.exports = {
  create,
  index,
  update,
  delete: deleteBook,
}
