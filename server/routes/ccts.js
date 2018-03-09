const router = require('express').Router();
const Cct = require('../models/cct');

router.route('/ccts')
    .get((req, res) => {})
    .post((req, res) => {});
router.route('/ccts/importar')
    .put((req, res) => {
        var cont = 0;
        var filterReq = {};
        console.log(req.body.length);
        /*Persona.insertMany(req.body, { ordered: false }).then(
          (result) => { res.json(result) },
          (err) => { res.json(err) }
        );*/
        for (var i = 0; i < req.body.data.length; i++)
            filterReq.CV_CCT = req.body.data[i][req.body.id];
            Persona.collection.bulkWrite([{
                updateOne: {
                    filter: filterReq,
                    update: req.body.data[i],
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