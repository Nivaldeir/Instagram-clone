const User = require('../Models/User')

module.exports = {

    async createUser(req, res) {
        const {
            name,
            username,
            password,
            description,
            site, 
            avata
        } = req.body

        try {
            const userAlreadyExists = await User.findOne({
                username: username
            })
            if(userAlreadyExists) return res.status(200).send({message: 'User already exists. Try a different one'})

            const createdUser = await User.create({
                name, username, password, description, site, avata
            })
            return res.status(200).send({
                message: 'User created',
                data: createdUser
            })
        } catch (e) {
            return res.status(400).send(e)
        }
    },
    async listUsers(req, res) {
        try {
            console.log(`1`)
            const allUsers = await User.find()
            console.log(`2`)
            return res.status(200).send({
                message:'Sucess',
                data: allUsers
            })
        } catch (error) {
            return res.status(400).send(error)
            
        }
    }
}