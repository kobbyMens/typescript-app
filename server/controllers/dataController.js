const UserModel = require('../models/User');


module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find({_id: {$ne: req.params.id}}).select(
            [
                "email",
                "username",
                "avatarImage",
                "_id"
            ])
            return res.json(users)
    } catch (ex) {

    }
}