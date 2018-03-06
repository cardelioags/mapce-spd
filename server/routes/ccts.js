const router = require('express').Router();
const Cct = require('../models/cct');

router.route('/ccts')
    .get((req, res) => {})
    .post((req, res) => {})
    .put((req, res) => {
        var cont = 0;
        console.log(req.body.length);
        /*Persona.insertMany(req.body, { ordered: false }).then(
          (result) => { res.json(result) },
          (err) => { res.json(err) }
        );*/
        for (let i = 0; i < req.body.length; i++)
            Persona.collection.bulkWrite([{
                updateOne: {
                    filter: {
                        CV_CCT: req.body[i].curp
                    },
                    update: {
                        curp: req.body[i].curp,
                        rfc: req.body[i].rfc,
                        nombre: req.body[i].nombre,
                        prim_apell: req.body[i].prim_apell,
                        segu_apell: req.body[i].segu_apell,
                    },
                    upsert: true
                }
            }]).then(
                (result) => {},
                (err) => {
                    console.log(err)
                }
            )
        res.send(200);
    })
    .delete((req, res) => {});
router.route('/ccts/model')
    .get((req, res) => {
        res.json(Cct.schema.paths);
    })

module.exports = router;