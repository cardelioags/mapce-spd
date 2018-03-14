const async = require('async')
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
        async.eachSeries(req.body.data, (obj, done) => {
            filterReq[req.body.id] = obj[req.body.id];
            Persona.findOneAndUpdate(
                filterReq,
                obj, {
                    upsert: true,
                    setDefaultsOnInsert: true,
                    runSettersOnQuery: true,
                    collation: {
                        locale: 'es',
                        strength: 1
                    }
                },
                done)
        }, (err) => {
            if (err) console.log(err)
            res.sendStatus(200);
        })
    })

router.route('/personas/model')
    .get((req, res) => {
        res.json(Persona.schema.paths);
    });
module.exports = router;