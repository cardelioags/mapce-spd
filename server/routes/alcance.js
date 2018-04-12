const express = require('express');
const router = express.Router();

const Alcances = require('../models/alcance');

router.route('/alcances')
.get((req, res) => {
    Alcances.find({}, (err, alcances)=>{
        if(err) console.log(err)
        res.json(alcances);
    })
})
.post((req, res)=>{
    Alcances.create(req.body, (err, alcance)=>{
        if(err) console.log(err);
        res.json(alcance);
    })
})
.put((req, res)=>{
    if (req.body.__V !== undefined) {
        delete req.body.__V
        console.log(req.body.__V);
    };
    Alcances.update(
        {_id: req.body._id},
        req.body,
        {
            upsert: true,
            new: true
        },
        (err, alcance) => {
            if (err) console.log(err);
            res.json(alcance);
        }
    )
})

module.exports = router;