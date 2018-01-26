var mongoose = require('mongoose');

db = mongoose.connect('mongodb://localhost:27017/spd-db').then(
    ()=>console.log("Conexión con mongodb establecida"),
    err =>console.log(err)
);
//db = mongoose.connect('mongodb://sist:3nrj5m2017@localhost:27017/enrjsm-te', { useMongoClient: true});