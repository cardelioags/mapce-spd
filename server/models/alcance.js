var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlcanceSchema = new Schema({
    descripcion: {type: String, unique: true, required: true},
    regex: String
}, {
    collection: 'alcances'
});

module.exports = mongoose.model('Alcance', AlcanceSchema);