var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlcanceSchema = new Schema({
    descripcion: String,
}, {
    collection: 'alcances'
});

module.exports = mongoose.model('Alcance', AlcanceSchema);



