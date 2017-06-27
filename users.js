var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var user = require('../models/users.model.js').users;

router.post('/update',function(req,res) {
    console.log('posting the data');
    if(mongoose.connect('mongodb://localhost/expressProject')){console.log('Connection done');}
    else{console.log('Connection fail');}
    if(mongoose.model('user').save({"id":5, "name":"New","age":55})){
        res.render('form',{title:'success'});
    }
    else{
        res.render('form',{title:'fail'});
    }
});
module.exports = router;
