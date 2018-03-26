const router = require("express").Router();
const Cct = require("../models/cct");
const async = require("async");

router
    .route("/ccts")
    .get((req, res) => {
        Cct.find({}).then(
            ccts => { res.json(ccts) },
            err => { res.send(err).status(200) }
        );
    })
    .post((req, res) => {});
router
    .route("/ccts/importar")
    .put((req, res) => {
        var cont = 0;
        var filterReq = {};
        async.eachSeries(
            req.body.data,
            (obj, done) => {
                filterReq[req.body.id] = obj[req.body.id];
                Cct.findOneAndUpdate(
                    filterReq,
                    obj, {
                        upsert: true,
                        setDefaultsOnInsert: true,
                        runSettersOnQuery: true,
                        collation: {
                            locale: "es",
                            strength: 1
                        }
                    },
                    done
                );
            },
            err => {
                if (err) console.log(err);
                res.sendStatus(200);
            }
        );
    })
    .delete((req, res) => {});
router.route("/ccts/model").get((req, res) => {
    res.json(Cct.schema.paths);
});

module.exports = router;