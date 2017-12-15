var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var OpcionSchema = new Schema({
    descripcion: String,
    clave: String,
    icono: String,
    ruta: String
}, {
    collection: 'opciones'
})

module.exports = mongoose.model('Opcion', OpcionSchema)
