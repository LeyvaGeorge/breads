require('dotenv').config()

const express = require('express')
const app = express()

//config
const PORT = process.env.PORT
console.log(PORT)

app.get('/', (req,res) => {
    res.send('Hello World')
})
const breadsController = require('./controllers/breads_controllers')
app.use('/breads',breadsController)

app.listen(PORT, () => {
    console.log('Listening on PORT: ', PORT)
})