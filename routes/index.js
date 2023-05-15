const router = require('express').Router()
const indexCtrl = require('../controllers/index.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/

router.get('/', indexCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

module.exports = router
