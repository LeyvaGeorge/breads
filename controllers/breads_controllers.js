const express = require('express')
const bread = require('../models/bread.js')
//const bread_seed = require('../models/bread_seed')
const breads_router = express.Router()
const bread_schema = require('../models/bread.js')
const baker_schema = require('../models/baker')
// {
//   //SEED
// breads_router.get('/data/seed', (req,res) => {
//   bread_schema.insertMany(bread_seed)
//     .then((createdBreads) => {res.redirect('/breads')})
// })

// //DestroyAll
// breads_router.get('/data/destroy', (req,res) => {
//   bread_schema.deleteMany()
//     .then((deletedBread) => {res.redirect('/breads') })
// })
// }


//NEW
breads_router.get('/new', (req,res) => {
    baker_schema.find()
      .then((foundbakers) => {
        res.render('new', {foundbakers})
      })
      
})

//EDIT
breads_router.get('/:id/edit', (req, res) => {
  bread.findById(String(req.params.id))
    .then(foundBread => { res.render('edit',{ bread:foundBread })  })
    .catch((err) => {console.log(err) })
})

//SHOW
breads_router.get('/:id', (req, res) => {
  
  bread.findById(String(req.params.id))
    .then(foundBread => {
      let bakedBy = foundBread.getBakedBy()
      console.log(bakedBy)
      res.render('show', { bread: foundBread})
    })
     .catch(err => { res.send('404') })
})

//update
breads_router.put('/:id', (req, res) => {
  req.body.hasGluten = req.body.hasGluten === 'on'
  bread_schema.findByIdAndUpdate(String(req.params.id), req.body, {new: true})
    .then((updatedBread) => {
      console.log(updatedBread)
      res.redirect(`/breads/${req.params.id}`)
    })
})


//Delete
breads_router.delete('/:arrayIndex',(req,res) => {
  bread.findByIdAndDelete(req.params.arrayIndex)
  
    .then(deletedBread => {
      res.status(303).redirect('/breads')
    })
})

// INDEX
breads_router.get('/', (req,res) => {
  bread_schema.find()
    .then(foundBreads => {
      res.render('index', {
        breads: foundBreads,
        title: 'Index'
      })
    })
    .catch((err) => {
      console.log(err)
    })
})
//get('/', (req, res) => {
//   bread_schema.find()
//     .then((foundBreads) => {
//       res.render('index', {
//         breads: foundBreads,
//         title: 'Index Page'
//       })
//     })
//     .catch((err)=> {
//       console.log(err)
//     })
// })

  // CREATE
breads_router.post('/', (req, res) => {
  req.body.hasGluten = req.body.hasGluten === 'on'
  bread_schema.create(req.body)
      .catch(err => {console.log(err) })
  res.redirect('/breads')
}) 

module.exports = breads_router
