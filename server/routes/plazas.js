const router = require('express').Router();
const Plaza = require('../models/plaza');

router.route('/plazas')
    .get((req, res) => {})
    .post((req, res) => {})
    .put((req, res) => {})
    .delete((req, res) => {});
router.route('/plazas/model')
    .get((req, res) => {
        res.json(Plaza.schema.paths);
    })

module.exports = router;