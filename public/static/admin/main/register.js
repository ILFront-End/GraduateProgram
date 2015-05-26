(function() {
	/* 单击关闭 */
	var $wrap = $('.register-wrap'),
		$register = $('#register'),
		$username = $register.find('#username'),
		$psw = $register.find('#psw'),
		$rpsw = $register.find('#rpsw'),
		$tips = $register.find('.tips > p');


	$register.on('click', '.close', function() {
		$wrap.hide();
	})

	/* 单击登录按钮 */
	.on('click', '.register-btn', function(e) {
		e.preventDefault();


		if (check()) {
			$(this).removeClass('able').addClass('disable');
			$.ajax({
				type: 'post',
				url: '/main/register',
				data: {
					user: $username.val(),
					psw: $psw.val()
				},
				success: function(res) {
					if (res.trim() == '1') {
						$wrap.hide();
						$('.register-btn').removeClass('disable').addClass('able');
					} else {
						$tips.html(res).removeClass().addClass('error');
						$('.register-btn').removeClass('disable').addClass('able');
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
			rpvalue = $rpsw.val(),
			reg = /^([a-zA-z0-9]+)$/,
			umatch = /^([a-zA-z0-9]+)$/.exec(uvalue),
			pmatch = /^([a-zA-z0-9]+)$/.exec(pvalue),
			rpmatch = /^([a-zA-z0-9]+)$/.exec(rpvalue),

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

		if (rpvalue.length === 0) {
			$tips.html('确认密码不能为空').removeClass().addClass('error');
			return;
		} else if (!rpmatch) {
			$tips.html('确认密码格式不正确').removeClass().addClass('error');
			return;
		}

		if (pvalue !== rpvalue) {
			$tips.html('再次确认密码').removeClass().addClass('error');
			return;
		}

		//$tips.html('正确').removeClass().addClass('ok');
		flag = true;

		return flag;
	}

})()