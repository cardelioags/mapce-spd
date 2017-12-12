var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new Schema({
    descripcion: String,
    opciones: [{type: mongoose.SchemaTypes.ObjectId, Ref:'opcion'}],
    alcances: [{type: mongoose.SchemaTypes.ObjectId, Ref:'alcance'}],
}, {collection: 'roles'})

module.exports = mongoose.model('Rol', RolesSchema);

