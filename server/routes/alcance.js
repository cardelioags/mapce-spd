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
    res.send('TODO');
})

module.exports = router;