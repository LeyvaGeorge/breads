const express = require('express')
const baker_seed = require('../models/baker_seeds')
const bakers_router = express.Router()               //baker name on code along
const baker_schema = require('../models/baker.js')  //Baker

bakers_router.get('/data/seed', (req,res) => {
    baker_schema.insertMany(baker_seed)
    .then(() => {res.redirect('/breads')})
    
    .catch((err) => {console.log(err)})
})

bakers_router.get('data/destor', (req,res) => {
    baker_schema.deleteMany()
    .then(() => res)
})

bakers_router.get('/:id', (req, res) => {
    baker_schema.findById(req.params.id)
        .populate('breads')
        .then((foundBaker) => { 
            res.render('baker_show', { baker: foundBaker }) 
        })
        .catch((err) => { console.log(err) })
})

bakers_router.get('/', (req,res) => {
    baker_schema.find()
    .populate('breads')
        .then((foundBakers) => {
            res.send(foundBakers)
        })
        .catch((err) => {console.log(err)})
})
module.exports = bakers_router