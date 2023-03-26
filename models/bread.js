// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Baker',
        
    }
})

breadSchema.methods.getBakedBy = function () {
    return `${this.name} baked with love by ${this.baker}`
}
// model and export 
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread