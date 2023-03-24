const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')


//NEW
breads_router.get('/new', (req,res) => {
    res.render('new')
})

//EDIT
breads_router.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('edit',{
        bread:foundBread
      })
    })
})

//SHOW
breads_router.get('/:id', (req, res) => {
  console.log(req.params.id)
    Bread.findById(req.params.id)
      .then(foundBread => {
        console.log(foundBread)
        res.render('show', {
          bread: foundBread
        })
      })
      .catch(err => {
        res.send('404')
      })
})

//update
breads_router.put('/:arrayIndex', (req, res) => {
  // if else
  req.body.hasGluten = req.body.hasGluten === 'on'
  Bread.findByIdAndUpdate(req.params.id,req.body, {new: true})
    .then(updatedBread => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    })
})


//Delete
breads_router.delete('/:arrayIndex',(req,res) => {
  Bread.findByIdAndDelete(req.params.arrayIndex)
  
    .then(deletedBread => {
      res.status(303).redirect('/breads')
    })
})

// INDEX
breads_router.get('/', (req, res) => {
    Bread.find()
    .then(foundBreads => {
      res.render('index', {
        breads: foundBreads,
        title: 'Index Page'
      })
    })

})

  // CREATE
breads_router.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  }) 

module.exports = breads_router
