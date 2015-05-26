/**
 +------------------------------------------------------------------------------
 * Author Ding Xin
 +------------------------------------------------------------------------------
 * server.js
 * 2015-05-23
 +------------------------------------------------------------------------------
 */
var express = require('express');
var router = express.Router();

var User = require('../schema/user');

/* GET main page. */
router.get('/', function(req, res, next) {
	res.render('main/index');
})

/* post login ajax request */
router.post('/login', function(req, res, next) {
	var user = req.body.user,
		psw = req.body.psw;

	User.findOne({
		user: user
	}, function(err, user) {
		if (err) {
			console.log(err);
		}

		if (!user) {
			res.send('用户名不存在');
		} else if (user.psw !== psw) {
			res.send('密码错误');
		} else {
			res.send('1');
			console.log('ssd')
		}
	})

});

/* post register ajax request */
router.post('/register', function(req, res, next) {
	var user = req.body.user,
		psw = req.body.psw;
	User.findOne({
		user: user
	}, function(err, user) {
		if (err) {
			console.log(err);
		}
		if (!user) {
			var _user = new User(req.body);
			_user.save(function(err, user) {
				if (err) {
					console.log(err)
				} else {
					res.send('1');
				}
			});
		} else {
			res.send('该用户已注册过');
		}
	})
});

module.exports = router;