const router = require('express').Router()
const { authUser } = require('../utils/index')

const authRouter = require('./auth.router')
const usersRouter = require('./user.router')
const clientsRouter = require('./clients.router')
const productsRouter = require('./products.router')
const ordersRouter = require('./orders.router')
const categoriesRouter = require('./categories.router')

router.use('/me/clients', clientsRouter)
router.use('/auth', authRouter)
router.use('/products', productsRouter)
router.use('/categories', categoriesRouter)
router.use('/orders', ordersRouter)
router.use('/users', authUser, usersRouter)

// router.get('/whoami', authUser, (req, res) => {
//   res.send(`hi there! ${res.locals.user.name}`)
// })

module.exports = router
