const User = require('../Models/User')

module.exports = {
    async login(req, res) {
        const { username, password } = req.body
        try {

            const validUsername = await User.findOne({
                where: {
                    username: username,
                    password: password
                }
            })
            if (!validUsername) return res.status(400).send({ message: 'User does not exist' }) 

            const validPassowrd = await User.findOne({
                password: password
            }).where({username: username})

            if (!validPassowrd) return res.status(400).send({ message: 'invalid password' })
            return res.status(200).send({ message: 'Success', data: validUsername })


        } catch (error) {
            res.status(400).send(error)
        }
    }
}