(function() {

	var $login = $('.login-wrap'),
		$register = $('.register-wrap');


	/*单击登录*/
	$(document).on('click', '.login > a', function() {
		$login.show();
	})

	/* 单击注册 */
	.on('click', '.register > a', function() {
		$register.show();
	})

	/* 单击立即使用 */
	.on('click', '.immediate > a', function(e) {
		if (!$('li[data-true]').length) {
			$login.show();
			e.preventDefault();
		}
	});


})()