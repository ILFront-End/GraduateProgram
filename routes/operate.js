/**
 +------------------------------------------------------------------------------
 * Author Ding Xin
 +------------------------------------------------------------------------------
 * server.js
 * 2015-05-23
 +------------------------------------------------------------------------------
 */
var express = require('express');
// var app = require('app');
var router = express.Router();

router.get('/',function (req,res,next) {
    res.render('operate/index');
})


module.exports = router;