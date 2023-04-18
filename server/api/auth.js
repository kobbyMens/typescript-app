const express = require('express')
const router = express.Router()

const { signup, login, setAvatar } = require('../controllers/authController')

router.post("/signup", signup)
router.post("/login", login)
router.post("/setAvatar/:id", setAvatar)


module.exports = router
