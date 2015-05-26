/*
   	@require "/static/lib/jquery-1.11.2.min.js"

*/

(function() {

	var $content, $name, $error,
		message = {
			tip: '请按规则填写',
			empty: '请填写菜单名',
			right: '正确'
		}

	function init() {
		$content = $('.menu-message');
		$name = $content.find('#menu_name');
		$error = $content.find('.errortis');
		$name.on('blur', check);
	}

	function check() {
		var flag = false,
			value = $name.val();
		if ($name && value === '') {
			$error.removeClass('right').addClass('error').html(message.empty).slideDown('fast');
		} else if ($name && /[^\u4E00-\u9FA5a-zA-Z0-9]/g.test(value)) {
			$error.removeClass('right').addClass('error').html(message.tip).slideDown('fast');
		} else {
			$error.removeClass('error').addClass('right').html(message.right).slideDown('fast');
			flag = true;
		}
		return {
			flag: flag,
			val: $name.val()
		}
	}

	return $.PMS.menuMessage = {
		check: check,
		init: init
	}

})()