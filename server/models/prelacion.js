const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PrelacionSchema = new Schema({

}, {
    collection: 'prelaciones',
    toJSON: {virtuals: true}
})

module.exports = mongoose.model('Prelacion', PrelacionSchema);