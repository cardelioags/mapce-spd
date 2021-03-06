const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CctSchema = new Schema({
    CV_CCT: {
        type: String,
        index: true,
        unique: true,
    },
    C_NOMBRE: String,
    CV_TIPO: String,
    C_TIPO: String,
    CV_ADMINISTRATIVA: String,
    C_ADMINISTRATIVA: String,
    CV_ESTATUS: String,
    C_ESTATUS: String,
    F_FUNDACION: String,
    INMUEBLE_CV_INMUEBLE: String,
    INMUEBLE_CV_VIALIDAD_PRINCIPAL: String,
    INMUEBLE_C_VIALIDAD_PRINCIPAL: String,
    INMUEBLE_CV_VIALIDAD_DERECHA: String,
    INMUEBLE_C_VIALIDAD_DERECHA: String,
    INMUEBLE_CV_VIALIDAD_IZQUIERDA: String,
    INMUEBLE_C_VIALIDAD_IZQUIERDA: String,
    INMUEBLE_CV_VIALIDAD_POSTERIOR: String,
    INMUEBLE_C_VIALIDAD_POSTERIOR: String,
    INMUEBLE_N_EXTNUM: String,
    INMUEBLE_C_EXTALF: String,
    INMUEBLE_N_INTNUM: String,
    INMUEBLE_C_INTALF: String,
    INMUEBLE_CV_ENT: String,
    INMUEBLE_C_NOM_ENT: String,
    INMUEBLE_CV_MUN: String,
    INMUEBLE_C_NOM_MUN: String,
    INMUEBLE_CV_LOC: String,
    INMUEBLE_C_NOM_LOC: String,
    INMUEBLE_CV_ASEN: String,
    INMUEBLE_C_NOM_ASEN: String,
    INMUEBLE_CV_CODIGO_POSTAL: String,
    INMUEBLE_C_DESC_UBICACION: String,
    INMUEBLE_LATITUD: Number,
    INMUEBLE_LONGITUD: Number,
    SOSTENIMIENTO_CV_CONTROL: String,
    SOSTENIMIENTO_C_CONTROL: String,
    SOSTENIMIENTO_CV_SUBCONTROL: String,
    SOSTENIMIENTO_C_SUBCONTROL: String,
    SOSTENIMIENTO_CV_DEPENDENCIAN1: String,
    SOSTENIMIENTO_C_DEPENDENCIAN1: String,
    SOSTENIMIENTO_CV_DEPENDENCIAN2: String,
    SOSTENIMIENTO_C_DEPENDENCIAN2: String,
    SOSTENIMIENTO_CV_DEPENDENCIAN3: String,
    SOSTENIMIENTO_C_DEPENDENCIAN3: String,
    SOSTENIMIENTO_CV_DEPENDENCIAN4: String,
    SOSTENIMIENTO_C_DEPENDENCIAN4: String,
    SOSTENIMIENTO_CV_DEPENDENCIAN5: String,
    SOSTENIMIENTO_C_DEPENDENCIAN5: String,
    SOSTENIMIENTO_CV_SERVICIO: String,
    SOSTENIMIENTO_C_SERVICIO: String,
    DEPOPERATIVA_CV_DEPENDENCIAN1: String,
    DEPOPERATIVA_C_DEPENDENCIAN1: String,
    DEPOPERATIVA_CV_DEPENDENCIAN2: String,
    DEPOPERATIVA_C_DEPENDENCIAN2: String,
    DEPOPERATIVA_CV_DEPENDENCIAN3: String,
    DEPOPERATIVA_C_DEPENDENCIAN3: String,
    DEPOPERATIVA_CV_DEPENDENCIAN4: String,
    DEPOPERATIVA_C_DEPENDENCIAN4: String,
    DEPOPERATIVA_CV_DEPENDENCIAN5: String,
    DEPOPERATIVA_C_DEPENDENCIAN5: String,
    CONTACTO_CV_CARGO: String,
    CONTACTO_C_CARGO: String,
    CONTACTO_CV_TIPODIRECTOR: String,
    CONTACTO_C_TIPODIRECTOR: String,
    CONTACTO_C_ASOCIACION: String,
    CONTACTO_C_CURP: String,
    CONTACTO_C_RFC: String,
    CONTACTO_C_NOMBRE: String,
    CONTACTO_C_APELLIDO1: String,
    CONTACTO_C_APELLIDO2: String,
    CONTACTO_C_TELEFONO: String,
    CONTACTO_C_CELULAR: String,
    CONTACTO_C_EMAIL: String,
    CONTACTO_C_EXTENSION: String,
    CONTACTO_C_PWEB: String,
    SERREG_CV_CCT: String,
    JEFSEC_CV_CCT: String,
    SUPERVISION_CV_CCT: String,
    C_TUNO_1: String,
    C_TUNO_2: String,
    C_TUNO_3: String,
    TIPONIVELSUB_CV_SERVICION1: String,
    TIPONIVELSUB_C_SERVICION1: String,
    TIPONIVELSUB_CV_SERVICION2: String,
    TIPONIVELSUB_C_SERVICION2: String,
    TIPONIVELSUB_CV_SERVICION3: String,
    TIPONIVELSUB_C_SERVICION3: String,
    C_SERVICIO_CAM: String,
    CARACTERISTCA_CV_CARACTERIZAN1: String,
    CARACTERISTCA_C_CARACTERIZAN1: String,
    CARACTERISTCA_CV_CARACTERIZAN2: String,
    CARACTERISTCA_C_CARACTERIZAN2: String
}, {
    //toJSON: {virtuals: true},
    collection: "ccts"
});

module.exports = mongoose.model("Ccts", CctSchema);