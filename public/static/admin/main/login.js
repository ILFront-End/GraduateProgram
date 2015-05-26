(function() {

	var $wrap = $('.login-wrap'),
		$login = $('#login'),
		$username = $login.find('#username'),
		$psw = $login.find('#psw'),
		$tips = $login.find('.tips > p');


	/* 单击关闭 */
	$login.on('click', '.close', function() {
		$wrap.hide();
	})

	/* 单击登录按钮 */
	.on('click', '.login-btn.able', function(e) {
		e.preventDefault();
		if (check()) {
			$(this).removeClass('able').addClass('disable');
			$.ajax({
				type: 'post',
				url: '/main/login',
				data: {
					user: $username.val(),
					psw: $psw.val()
				},
				success: function(res) {
					if (res.trim() == '1') {
						//此处与index.tpl 有牵连，如不需要可注释
						$('.login').attr('data-true', '').html('<span>' + $username.val() + '用户，你好！</span>');


						$wrap.hide();
					} else {
						$tips.html(res).removeClass().addClass('error');
						$('.login-btn').removeClass('disable').addClass('able');
					}
				}
			});
		}
	})

	/* 输入框  等到焦点 */
	.on('focus', 'input', function() {
		$tips.html('').removeClass();
	});

	function check() {
		var uvalue = $username.val(),
			pvalue = $psw.val(),
			reg = /^([a-zA-z0-9]+)$/,
			umatch = /^([a-zA-z0-9]+)$/.exec(uvalue),
			pmatch = /^([a-zA-z0-9]+)$/.exec(pvalue),

			flag = false;

		if (uvalue.length === 0) {
			$tips.html('用户名不能为空').removeClass().addClass('error');
			return;
		} else if (!umatch) {
			$tips.html('用户名格式不正确').removeClass().addClass('error');
			return;
		}

		if (pvalue.length === 0) {
			$tips.html('密码不能为空').removeClass().addClass('error');
			return;
		} else if (!pmatch) {
			$tips.html('密码格式不正确').removeClass().addClass('error');
			return;
		}

		//$tips.html('正确').removeClass().addClass('ok');
		flag = true;

		return flag;
	}

})()