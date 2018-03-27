const express = require('express');
const mongoose = require('mongoose');
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
    .post((req, res) => {
        const newMenu = new Menu(req.body.menu);
        newMenu.save(err => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(newMenu);
        })
    })
    .put((req, res)=> {
        if (!req.body._id){
            req.body._id = mongoose.mongo.ObjectID();
        }
        Menu.findOneAndUpdate({_id: req.body._id}, req.body, {new: true, upsert: true}, 
            (err, menu) => {
                if(err) return res.status(500).send(err);
                return res.status(200).send(menu);
            }
        )
    })

module.exports = router;