const express = require('express');
const router = express.Router();

const Opciones = require('../models/opciones');

router.route('/opciones')
.get((req, res)=>{
    Opciones.find({}, (err, opciones)=>{
        if (err) {
            console.log(err)
        }
        res.json(opciones);
    });
})
.post((req, res)=>{
    Opciones.create(req.body, (err, opcion)=>{
        if(err) console.log(err)
        res.json(opcion);
    });
})

module.exports = router;