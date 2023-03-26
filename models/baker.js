const mongoose = require('mongoose')// require mongoose 
const { Schema } = mongoose // creating shorthand for the Schema constructor 

const baker_Schema = new Schema({// schema
    name: { 
        type: String, 
        required: true,
        enum: ['Rachel','Joey', 'Monica', 'Chandler', 'Ross', 'Phoebe']
     },
    startDate: {type:Date, required: true},
    bio: String,
})
// model and export 
const baker = mongoose.model('baker_schema', baker_Schema)
module.exports = baker