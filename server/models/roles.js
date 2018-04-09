var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolesSchema = new Schema({
    descripcion: String,
    menus: []
}, { collection: 'roles' })

module.exports = mongoose.model('Rol', RolesSchema);