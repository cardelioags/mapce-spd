const router = require('express').Router();
const Cct = require('../models/cct');

router.route('/ccts')
    .get((req, res) => {})
    .post((req, res) => {})
    .put((req, res) => {})
    .delete((req, res) => {});
router.route('/ccts/model')
    .get((req, res) => {
        res.json(Cct.schema.paths);
    })

module.exports = router;