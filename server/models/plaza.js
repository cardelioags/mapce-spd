const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PlazaSchema = new Schema({
  CODIGO_PLAZA: {
    unique: true,
    index: true,
    type: String
  },
  RAMO: String,
  UNIDAD_RESPONSABLE: String,
  CODIGO: String,
  MODELO: Number,
  NIVEL: String,
  CCT: String,
  ZONA_ECONOMICA: Number,
  CONTRATACION: String,
  TIPO_PLAZA: String,
  CANTIDAD: Number,
  TIPO_TRANSACCION: String,
  ESTATUS: String,
  FECHA: String,
  EFECTO_DESDE: Date,
}, {
  toJSON: {
    virtuals: true
  },
  collection: 'plazas'
})

PlazaSchema.virtual('cct_doc', {
    ref: 'Ccts',
    localField: 'CCT',
    foreignField: 'CVE_CCT',
})


module.exports = mongoose.model('Plaza', PlazaSchema)
