const router = require('express').Router()

const {addMessage, getAllMessages} = require('../controllers/messagesController')

router.post("/addMessage/", addMessage)
router.post("/getallmessages", getAllMessages)

module.exports = router