const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Persona = require("./personas")

var NominaSchema = new Schema({
    curp: {
        type: String,
        index: true,
    },
    rfc: {
        type: String,
        index: true
    },
    cct: {
        type: String,
        index: true,
    },
    plaza: String,
    motivo: String,
    codigo_spd: String,
    ing_sep: String,
    ing_sub: String,
    inicio_pago: String,
    fin_pago: String,
    categoria: String,
    horas: Number,
}, {
    toJSON: { virtuals: true },
    collection: "nomina"
});

NominaSchema.virtual("plazaRfc").get(function() {
    return this.plaza + this.rfc;
});
NominaSchema.virtual('persona', {
    ref: 'Persona',
    localField: 'curp',
    foreignField: 'curp',
    justOne: true
})


module.exports = mongoose.model("Nomina", NominaSchema);