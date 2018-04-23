var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Persona = require("./personas");
var Roles = require("./roles");
var Alcances = require("./alcance");

var UsuariosSchema = new Schema({
    persona: { type: Schema.Types.ObjectId, ref: 'Persona' },
    permisos: [{
        rol: { type: Schema.Types.ObjectId, ref: 'Rol' },
        alcance: { type: Schema.Types.ObjectId, ref: 'Alcance' },
    }]
}, {
    collection: 'usuarios',
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

UsuariosSchema.virtual('nombre').get(function() {
    return this.persona.fullname
})
UsuariosSchema.virtual('email').get(function() {
    return this.persona.email
})

module.exports = mongoose.model('Usuario', UsuariosSchema)