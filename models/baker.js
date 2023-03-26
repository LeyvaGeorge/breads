// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const baker_Schema = new Schema({
    name: { 
        type: String, 
        required: true,
        enum: ['Rachel','Joey', 'Monica', 'Chandler', 'Ross', 'Phoebe']
     },
    startDate: {type:Date, required: true},
    bio: String,
})
// model and export 
const baker = mongoose.model('baker', baker_Schema)
module.exports = baker