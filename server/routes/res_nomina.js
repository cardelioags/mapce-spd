const router = require("express").Router();
const ResNom = require("../models/res_nomina");

router
    .route("/nomina")
    .get((req, res) => {
        ResNom.find().populate('persona')
            .exec().then(
                nomina => res.json(nomina),
                err => res.json(err)
            );
    })
    .post((req, res) => {});

router
    .route("/nomina/importar")
    .put((req, res) => {
        var cont = 0;
        var filterReq = {};
        for (var i = 0; i < req.body.data.length; i++) {
            //filterReq[req.body.id] = req.body.data[i];
            ResNom.bulkWrite([{
                    replaceOne: {
                        filter: {
                            rfc: req.body.data[i].rfc,
                            plaza: req.body.data[i].plaza
                        },
                        replacement: req.body.data[i],
                        upsert: true,
                        setDefaultsOnInsert: true
                    }
                }])
                .then(
                    result => {},
                    err => {
                        //console.log(err);
                    }
                );
        }
        res.sendStatus(200);
    })
    .delete((req, res) => {});

router.route("/nomina/model").get((req, res) => {
    res.json(ResNom.schema.paths);
});

module.exports = router;