var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlcanceSchema = new Schema({
    descripcion: String,
    tipoServ: String,
    nivelEducativo: String,
    modalidad: String,
    zona: String,
    cct: String
}, {
    collection: 'alcances'
});

module.exports = mongoose.model('Alcance', AlcanceSchema);