const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')


//NEW
breads_router.get('/new', (req,res) => {
    res.render('new')
})

//EDIT
breads_router.get('/:arrayIndex/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.arrayIndex],
    index: req.params.arrayIndex,
  })
})

//SHOW
breads_router.get('/:arrayIndex', (req, res) => {
    //res.send(Bread[req.params.arrayIndex])
    if (Bread[req.params.arrayIndex]){
        res.render('show', {
          bread: Bread[req.params.arrayIndex],
          index: req.params.arrayIndex,
        })
    } else {
        res.send('this index does not exit -> 404')
    }
})

//update
breads_router.put('/:arrayIndex', (req, res) => {
  req.body.hasGluten = req.body.hasGluten === 'on'
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})


//Delete
breads_router.delete('/:arrayIndex',(req,res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
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
