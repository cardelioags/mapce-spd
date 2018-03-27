var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new Schema({
    descripcion: String,
    alcances: [{type: mongoose.SchemaTypes.ObjectId, Ref:'alcance'}],
    menus: []
}, {collection: 'roles'})

module.exports = mongoose.model('Rol', RolesSchema);

