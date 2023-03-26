const express = require('express')
const baker_seed = require('../models/baker_seed')
const baker_router = express.Router()               //baker name on code along
const baker_schema = require('../models/baker.js')  //Baker

baker_router.get('/data/seed', (req,res) => {
    baker_schema.insertMany(baker_seed)
    .then(() => {res.redirect('/breads')})
    //not in code along ignore bottom
    .catch((err) => {console.log(err)})


})


module.exports = bakers_router