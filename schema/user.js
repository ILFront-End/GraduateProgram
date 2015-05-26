/* 用户信息schema */

var mongoose = require('mongoose');


/* 新建数据库表 */
var UserSchema = new mongoose.Schema({
	user: {
		unique: true,
		type: String
	},
	psw: String
});


/* 数据库表模型化 */
var User = mongoose.model('User', UserSchema);

/* 导出模型 */
module.exports = User;