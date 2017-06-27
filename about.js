var express = require('express');
var router = express.Router();
var vd= require('../videodata.json');

var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', { name: 'Krishna',age:22 ,videodata : vd });

});

module.exports = router;
