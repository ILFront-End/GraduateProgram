(function() {
	/*
		@require '/static/widege/admin/popup/popup.js'
		@require '/static/admin/operate/left/menuMessage.js'
		@require '/static/admin/operate/left/Menu.js'
	*/

	var $page = $('.layoutStyle').not('.hide'),
		$myLeft = $page.find('.my-left'),
		$wrap = $page.find('.menu-wrap'),
		tpl = __inline('/page/admin/operate/left/menuMessage.tpl'),
		MenuTpl = __inline('/page/admin/operate/left/Menu.tpl'),
		$menuMessageTip = $.popup('请填写菜单信息	', tpl),

		animLT = {}, //记录动画结束坐标
		$curMenu = '', //记录生成的menu放在哪个Element下
		classname = '', //记录生成菜单的class
		$menuone = $page.find('.tip-one'), //提示的第一个menu
		$menutwo = $page.find('.tip-two'), //提示的第二个menu
		$menuthird = $page.find('.tip-third'), //提示的第三个menu

		rename_f = false;



	$.PMS.menuMessage.init();

	/*设置菜单从属关系   -----菜单是哪级的？菜单上级是哪个？  ----   */
	function setMenuBlong(to, rank) {
		$menuMessageTip.find('#belong_to').val(to);
		$menuMessageTip.find('#menu_rank').val(rank);
	};

	/* 标记生成的menu添加在哪里， class是什么 */
	function markMenu(curM, classN) {
		$curMenu = curM;
		classname = classN;
	}


	/*  菜单重命名  */
	function renamed() {
		rename_f = true;
		$menuMessageTip.show('slow');
	}

	/* 删除菜单 */
	function deleted() {
		$curMenu.remove();
		$menuone.css({
			visibility: 'hidden'
		});
		$menutwo.css({
			visibility: 'hidden'
		});
	}

	/*生成各级菜单的动画效果*/
	function moveElement(obj) {
		var startX = obj.startX,
			startY = obj.startY,
			endX = obj.endX || 0,
			endY = obj.endY || 0,
			fragment = obj.fragment || '<div style=height:20px;width:20px;background-color:red;border-radius:10px;position:absolute;display:none;z-index:3;></div>',
			time = obj.time || 1000,

			callback = function() {
				$fragment.remove();
				obj.callback && obj.callback();
			},
			$fragment = $(fragment);

		if (!startX || !startY) {
			return;
		}

		$fragment.css({
			top: startY + 'px',
			left: startX + 'px'
		}).appendTo($myLeft).show();
		$fragment.animate({
			top: endY + 'px',
			left: endX + 'px',
			opacity: 0.5
		}, time, callback);
	}


	/* 右击生成一级菜单 */
	$wrap.on('contextmenu', function(e) {
		e.stopPropagation();
		e.preventDefault();

		animLT['top'] = e.clientY;
		animLT['left'] = e.clientX;

		markMenu($wrap, 'first-menu');
		setMenuBlong('', '0');
		$.PMS.menuMessage.ymenu.init($menuone, e, $myLeft);
	})

	/* 右击生成二级菜单 */
	.on('contextmenu', '.first-menu > a', function(e) {
		e.stopPropagation();
		e.preventDefault();

		animLT['top'] = e.clientY;
		animLT['left'] = e.clientX;

		markMenu($(this).parent(), 'second-menu');

		var _to = $curMenu.text();
		setMenuBlong(_to, '1');

		$menutwo.find('.add').html('生成二级菜单');
		$.PMS.menuMessage.ymenu.init($menutwo, e, $myLeft);
	})

	/* 右击生成三级菜单 */
	.on('contextmenu', '.second-menu > a', function(e) {
			e.stopPropagation();
			e.preventDefault();

			animLT['top'] = e.clientY;
			animLT['left'] = e.clientX;

			markMenu($(this).parent(), 'third-menu');

			var _to = $curMenu.text();
			setMenuBlong(_to, '2');

			$menutwo.find('.add').html('生成三级菜单');
			$.PMS.menuMessage.ymenu.init($menutwo, e, $myLeft);

		})
		/* 暂时不支持生成四级菜单*/
		.on('contextmenu', '.third-menu > a', function(e) {
			e.stopPropagation();
			e.preventDefault();
			markMenu($(this).parent(), 'third-menu');

			var _to = $curMenu.text();
			setMenuBlong(_to, '3');
			$.PMS.menuMessage.ymenu.init($menuthird, e, $myLeft);
		})


	/*单击菜单展开收起*/
	.on('click', '.first-menu > a, .second-menu > a', function() {
		var $this = $(this).parent(),
			$chid = $this.children('div');
		$chid.slideToggle('fast');
	})


	/*   右击添加菜单   */
	$page.find('.contentMenu').on('click', '.add', function() {
		$menuMessageTip.show('slow');
		$menuone.css({
			visibility: 'hidden'
		});
		$menutwo.css({
			visibility: 'hidden'
		});
	})

	/*   单击重命名   */
	.on('click', '.rename', renamed)

	/*   单击删除   */
	.on('click', '.delete', deleted);



	/*   单击弹窗中的确定   */
	$menuMessageTip.find('.confirm').on('click', function(e) {
		e.stopPropagation();

		var _isok = $.PMS.menuMessage.check();

		if (!_isok.flag) return;

		$menuMessageTip.hide();
		if (rename_f) {
			$curMenu.find(' > a').html(_isok.val);
			rename_f = false;
			return;
		}
		moveElement({
			startX: e.clientX,
			startY: e.clientY,
			endX: animLT.left,
			endY: animLT.top,
			callback: function() {
				var $MenuTpl = $(MenuTpl);
				$MenuTpl.addClass(classname).find('a').html(_isok.val);
				$MenuTpl.appendTo($curMenu).slideDown('fast');
			}
		});

		//$menuMessageTip.find('.menu-message form').submit();
	});

})()



/*(function() {
	
})()*/