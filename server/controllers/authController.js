const bcrypt = require('bcrypt')
const UserModel = require('../models/User')

module.exports.signup = async(req, res, next) => {
    try {
        let {username, email, password} = req.body
        
        username = username.trim()
        email = email.trim()
        password = password.trim()

        const usernameAlreadyExist = await UserModel.findOne({ username })
        
        if(usernameAlreadyExist) {
            if (usernameAlreadyExist.username.toLowerCase() === username.toLowerCase() )
            return res.json( {message: "This username is already taken", status: 'Error'})
        }

        //email validations
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            return res.json({message: "Invalid email", status: "Error"})
        }

        const emailAlreadyExist = await UserModel.findOne({ email })
        if(emailAlreadyExist) {
            return res.json( {message: "Account is already existing", status: 'Error'} )
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const user = await UserModel.create({
            email,
            username,
            password: hashPassword
        })
        delete user.password

        return res.json({ status: true, user })

    } catch (err) {
        next(err)
    }
}

module.exports.login = async (req, res, next) => {
    try {
        let {email, password} = req.body
        email = email.trim()
        password = password.trim()

        if (password === "" || email === "") {
           return res.json({message: "Provide email and password", status: "Error"})
        }
        else {
            let validUser = await UserModel.findOne({ email })
            if (validUser) {
                let validPassword = await bcrypt.compare(password, validUser.password)
                if(validPassword) {
                    delete validUser.password
                    return res.json({user: validUser, status: true})
                } else {
                    return res.json({message: "Invalid email or password", status: "Error"})
                }
            } else {
                return res.json({message: "Invalid email or password", status: "Error"})
            }
        }
    } catch(err) {
        next(err)
    }
   
}

module.exports.setAvatar = async (req, res, next) => {
    try {
        const userId = req.params.id
        const avatarImage = req.body.image;
        const userData = await UserModel.findByIdAndUpdate(userId, {
            isAvatarImageSet: true,
            avatarImage
        })
        return res.json({ 
            isSet: userData.isAvatarImageSet, 
            image: userData.avatarImage
        })
    } catch(ex) {
        next(ex);
    }
}