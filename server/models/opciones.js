var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var OpcionSchema = new Schema({
    descripcion: String,
    clave: String,
    icono: String,
    ruta: String,
    depende: { type: Schema.Types.ObjectId, ref: this },
    tipo: String,
}, {
    collection: 'opciones'
})

module.exports = mongoose.model('Opcion', OpcionSchema)