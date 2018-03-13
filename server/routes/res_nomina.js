const router = require("express").Router();
const ResNom = require("../models/res_nomina");
const async = require("async");

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
    async.eachSeries(req.body.data, (obj, done) => {
      ResNom.findOneAndUpdate({
          rfc: obj.rfc,
          plaza: obj.plaza
        },
        obj, {
          upsert: true,
          setDefaultsOnInsert: true,
          runSettersOnQuery: true
        },
        done)
    }, (err) => {
      if (err) console.log(err)
      res.sendStatus(200)
    })
  })
  .delete((req, res) => {});

router.route("/nomina/model").get((req, res) => {
  res.json(ResNom.schema.paths);
});

module.exports = router;
