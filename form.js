/**
 * Created by Krishna on 4/11/2017.
 */

var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var http = require("http");
var User=require('../models/users.model.js').users;
var app=express();

router.post('/myaction',function(req,res) {
    var user=new User({id:req.body.id,name:req.body.name,age:req.body.age});
    console.log('posting the data');/*
    if(mongoose.connect('mongodb://localhost/expressProject')){console.log('Connection done');}
    else{console.log('Connection fail');}

    if(mongoose.model('user').save({"id":req.body.id, "name":req.body.name,"age":req.body.age })){
        res.render('form',{title:'success'});
    }
    else{
        res.render('form',{title:'fail'});
    }*/
    user.save(function(err,result){
    if(err){
        res.render('form',{title:'fail'});
    }
    else{
        res.render('form',{title:'success'});
    }});

});

module.exports = router;
