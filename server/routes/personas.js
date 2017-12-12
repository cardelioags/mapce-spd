const express = require('express');
const router = express.Router();

router.route('/personas')
.get((req, res)=>{
    res.send('TODO personas get')
})
.post((req, res)=>{
    res.send('TODO personas post')
})