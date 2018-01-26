const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Persona = require('../models/personas');


router.route('/personas')
  .get((req, res) => {
    res.send('TODO personas get')
  })
  .post((req, res) => {
    res.send('TODO personas post')
  })
router.route('/personas/carga')
  .post((req, res) => {
    var cont = 0;
    console.log(req.body.length);
    for (let i = 0; i < req.body.length; i++) {
      Persona.bulkWrite({
        updateOne: {
          filter: {curp: req.body[i].curp},
          update: req.body[i],
          options: {upsert: true}
        }
      }).then(result => {
        console.log(result);
      })
    }
    /*Persona.collection.insertMany(req.body,{ordered: false},(result)=>{
        console.log(result);
    })
    /*for (let i = 0; i < req.body.length; i++) {
      bulk.find({curp: req.body[i].curp}).update({curp: req.body[i].curp}, { $set: req.body[i]}, {upsert: true})
      console.log(i)
    }*/
    console.log(cont)
    res.json({
      cont: cont
    });
  })
module.exports = router;
