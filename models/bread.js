// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const bread_Schema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'baker_schema',

    }
})

bread_Schema.methods.getBakedBy = function () {
    return `${this.name} baked with love by ${this.baker.name} who has been withus since ${this.baker.startDate.gitFullYear()}`
}
// model and export 
const Bread = mongoose.model('Bread', bread_Schema)
module.exports = Bread