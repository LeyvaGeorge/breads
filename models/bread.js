const mongoose = require('mongoose')

const bread_schema = new mongoose.Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'baker_schema',
    }
})

bread_schema.methods.getBakedBy = function () {
    let baker_name = "somebody"
    let baker_start = new Date().getFullYear()
    if(this.baker) {
        baker_name = this.baker.name
        baker_start = this.baker.startDate
    }
    return `${this.name} baked with love by ${baker_name} who has been withus since ${baker_start}`
}
// model and export 
module.exports = mongoose.model('bread_schema', bread_schema)