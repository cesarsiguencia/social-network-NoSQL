const router = require('express').Router();
const thoughtsRoutes = require('./thoughts-routes')
const userRoutes = require('./users-routes.js')

router.use('/thoughts', thoughtsRoutes)
router.use('/users', userRoutes)

module.exports = router;