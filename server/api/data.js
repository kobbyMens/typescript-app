const express = require('express')
const router = express.Router()

const  { getAllUsers } = require('../controllers/dataController')

router.get('/getallusers/:id', getAllUsers)


module.exports = router