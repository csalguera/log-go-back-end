const router = require('express').Router()
const moviesCtrl = require('../controllers/movies.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, moviesCtrl.create)
router.get('/', checkAuth, moviesCtrl.index)
router.put('/:id', checkAuth, moviesCtrl.update)
router.delete('/:id', checkAuth, moviesCtrl.delete)
router.put('/:id/add-photo', checkAuth, moviesCtrl.addPhoto)

module.exports = router
