var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var OpcionSchema = new Schema({
    descripcion: String,
    clave: String,
}, {
    collection: 'opciones'
})

module.exports = mongoose.model('Opcion', OpcionSchema)
