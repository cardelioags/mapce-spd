const express = require( 'express');
const router = express.Router();
const mongoose = require( 'mongoose');
const Persona = require('../models/personas');


router.route('/personas')
.get((req, res)=>{
    res.send('TODO personas get')
})
.post((req, res)=>{
    res.send('TODO personas post')
})
router.route('/personas/carga')
.post((req, res)=>{
    console.log(req.body);
    Persona.update()
    res.json({mensaje: "operacion completada"})
})
module.exports = router;