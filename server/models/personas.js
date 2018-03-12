const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var PersonaSchema = new Schema({
    curp: {
        type: String,
        index: true,
        unique: true
    },
    nombre: String,
    prim_apell: String,
    segu_apell: String,
    rfc: {
        type: String,
        index: true,
        unique: true
    },
    email: {
        type: String,
        index: true
    },
    tel_fijo: String,
    tel_movil: String,
    calle: String,
    numero: String,
    interior: String,
    colonia: String,
    localidad: String,
    municipio: String,
    estado: String,
    longitud: Number,
    latitud: Number,
    ultimo_mov: Date
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    },
    collection: "personas"
});

PersonaSchema.virtual("fullname").get(function() {
    return this.nombre + " " + this.prim_apell + " " + this.segu_apell;
});

module.exports = mongoose.model("Persona", PersonaSchema);