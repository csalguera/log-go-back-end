const router = require('express').Router()
const profilesCtrl = require('../controllers/profiles.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/my-profile', checkAuth, profilesCtrl.myProfile)
router.get('/:id', checkAuth, profilesCtrl.show)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.put('/change-username', checkAuth, profilesCtrl.updateName)

module.exports = router
