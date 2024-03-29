const router = require('express').Router()
const authCtrl = require('../controllers/auth.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/change-password', checkAuth, authCtrl.changePassword)
router.post('/change-username', checkAuth, authCtrl.changeUsername)
router.post('/change-favorite-color', checkAuth, authCtrl.changeFavoriteColor)
router.post('/change-dark-pref', checkAuth, authCtrl.changeDarkPref)

module.exports = router
