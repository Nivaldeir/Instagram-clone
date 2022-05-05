const express = require('express');
const router = require('./Utils/router');
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
const app = express();
const mongoConnection = process.env.MONGO_URI

console.log(mongoConnection)
mongoose.connect(mongoConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => { console.log('Connected to database') })

//Entender json
app.use(cors())

app.use(express.json())

app.use(router)
app.get('/', (req, res) => {
    res.send('')
})

app.listen(process.env.PORT || 3000, () => console.log('Servidor online'))