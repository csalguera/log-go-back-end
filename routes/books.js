const router = require('express').Router()
const booksCtrl = require('../controllers/books.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, booksCtrl.create)
router.get('/', checkAuth, booksCtrl.index)
router.put('/:id', checkAuth, booksCtrl.update)
router.delete('/:id', checkAuth, booksCtrl.delete)

module.exports = router
