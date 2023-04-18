const messagesModel = require('../models/messagesModel')


module.exports.addMessage = async(req, res, next) => {
    try {
        const { from, to, message } = req.body
        const data = await messagesModel.create({
            message: {text: message},
            users: [from, to],
            sender: from,
        })

        if(data) {
            res.json({message: "Message stored successfully in database"})
        } else {
            res.json({message: "Unble to store message in database"})
        }
    }
    catch(ex) {
        next(ex)
    }
}

module.exports.getAllMessages = async(req, res, next) => {

    try{
       const {from, to} = req.body
       const messages = await messagesModel.find({
        users: {
            $all: [from, to],
        },
       }).sort({updatedAt: 1})
       
       const allMessages = messages.map((msg) => {
        return {
            fromSelf: msg.sender.toString() === from,
            message: msg.message.text,
        }
       })
       res.json(allMessages);
    }

    catch(ex) {
        next(ex)
    }
}