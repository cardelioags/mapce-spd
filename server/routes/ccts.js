const router = require("express").Router();
const Cct = require("../models/cct");

router
    .route("/ccts")
    .get((req, res) => {})
    .post((req, res) => {});
router
    .route("/ccts/importar")
    .put((req, res) => {
        var cont = 0;
        var filterReq = {};
        /*Persona.insertMany(req.body, { ordered: false }).then(
                  (result) => { res.json(result) },
                  (err) => { res.json(err) }
                );*/
        for (var i = 0; i < req.body.data.length; i++) {
            filterReq[req.body.id] = req.body.data[i];
            Cct.bulkWrite([{
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
                        console.log(err);
                    }
                );
        }
        res.sendStatus(200);
    })
    .delete((req, res) => {});
router.route("/ccts/model").get((req, res) => {
    res.json(Cct.schema.paths);
});

module.exports = router;