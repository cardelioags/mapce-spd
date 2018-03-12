const express = require('express');
const router = express.Router();
const Persona = require('../models/personas');


router.route('/personas')
    .get((req, res) => {
        Persona.find().then(
            personas => {
                res.json(personas);
            },
            err => {
                res.json(err);
            })
    })
    .post((req, res) => {
        res.send('Persona Registrada')
    });


router.route('/personas/importar')
    .put((req, res) => {
        var cont = 0;
        var filterReq = {};
        for (var i = 0; i < req.body.data.length; i++) {
            filterReq[req.body.id] = req.body.data[i][req.body.id];
            Persona.bulkWrite([{
                    replaceOne: {
                        filter: filterReq,
                        replacement: req.body.data[i],
                        upsert: true,
                        setDefaultsOnInsert: true,
                    }
                }])
                .then(
                    result => {},
                    err => {
                        //console.log(err);
                    }
                );
        }
        res.send("Terminó el bucle de actualización");
    });

router.route('/personas/model')
    .get((req, res) => {
        res.json(Persona.schema.paths);
    });
module.exports = router;