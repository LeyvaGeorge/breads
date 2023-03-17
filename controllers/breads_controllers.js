const express = require('express')
const breads_router = express.Router()
const Bread = require('../models/bread.js')

//NEW
breads_router.get('/new', (req,res) => {
    res.render('new')
})

//Edit
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
    res.render('Index', {
        breads: Bread,
        title: 'Index Page'
    })
  //res.send(Bread)
})

  // CREATE
breads_router.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.push(req.body)
    res.redirect('/breads')
  })
  

module.exports = breads_router
