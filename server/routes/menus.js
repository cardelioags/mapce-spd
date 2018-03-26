const express = require('express');
const router = express.Router();

const Menu = require('../models/menu');

router.route('/menus')
    .get((req, res) => {
        Menu.find({}).then(
            menus => {
                res.json(menus)
            },
            err => {
                res.json(err);
            }
        )
    })

module.exports = router;