var mongoose = require('mongoose');

db = mongoose.connect('mongodb://' + (process.env.CON_DB || 'localhost:27017/spd-db')).then(
    () => console.log("Conexión con mongodb establecida " + (process.env.CON_DB || 'localhost:27017/spd-db')),
    err => console.log(err)
);
module.exports = mongoose.connection
    //db = mongoose.connect('mongodb://sist:3nrj5m2017@localhost:27017/enrjsm-te', { useMongoClient: true});