var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AsignacionSchema = new Schema({
    pesona: { type: String, unique: true, required: true },
    plazas: []
}, {
    collection: 'asignaciones'
});

module.exports = mongoose.model('Asignacion', AsignacionSchema);