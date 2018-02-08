const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Persona = require('../models/personas');


router.route('/personas')
  .get((req, res) => {
    Persona.find().then(
      personas => {
        res.json(personas);
      },
      err => {
        res.json(err);
      })
  })
  .post((req, res) => {
    res.send('Persona Registrada')
  })
  .put((req, res) => {
    var cont = 0;
    console.log(req.body.length);
    /*Persona.insertMany(req.body, { ordered: false }).then(
      (result) => { res.json(result) },
      (err) => { res.json(err) }
    );*/
    for (let i = 0; i < req.body.length; i++)
      Persona.collection.bulkWrite([{
        updateOne: {
          filter: {
            curp: req.body[i].curp
          },
          update: {
            curp: req.body[i].curp,
            rfc: req.body[i].rfc,
            nombre: req.body[i].nombre,
            prim_apell: req.body[i].prim_apell,
            segu_apell: req.body[i].segu_apell,
            prim_apell: req.body[i].prim_apell,
          },
          upsert: true
        }
      }]).then(
        (result) => {},
        (err) => {
          console.log(err)
        }
      )
    res.send(200);
  })
module.exports = router;
