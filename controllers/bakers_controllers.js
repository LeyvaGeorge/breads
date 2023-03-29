const express = require('express')
const baker_seed = require('../models/baker_seeds')
const bakers_router = express.Router()               //baker name on code along
const baker_schema = require('../models/baker.js')  //Baker

bakers_router.get('/data/seed', (req,res) => {
    baker_schema.insertMany(baker_seed)
    .then(() => {res.redirect('/breads')})
    
    .catch((err) => {console.log(err)})
})

bakers_router.get('/:id', (req, res) => {
    baker_schema.findById(req.params.id)
        .populate({
            path: 'breads',
            options: {limit:2},
        })
        .then((foundBaker) => { 
            res.render('baker_show', { baker: foundBaker }) 
        })
        .catch((err) => { console.log(err) })
})

bakers_router.delete('/id',(req,res) => {
    baker_schema.findByIdAndDelete(req.params.id)
        .then((deletedBaker) => {
            res.status(303).redirect('/breads')
        })
        .catch((err) => { console.log(err)})
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