(function($) {
	var PMS;
	var tpl = __inline('/widget/admin/popup.tpl'),
		$global = $('body'),
		position = function($popup) {
			var $window = $(window),
				screenWidth = $window.width(),
				screenHeight = $window.height(),
				Left = (screenWidth - $popup.width()) / 2 - 20,
				Top = (screenHeight - $popup.height()) / 2 - 20;
			$popup.css({
				left: Left,
				top: Top
			})
		},
		fill = function($popup, title, content) {
			$popup.find('.p-title span').html(title);
			$popup.find('.p-content').html(content);
		},
		popup = function(title, content) {

			var $poputWrap = $(tpl),
				$curPopup = $poputWrap.children();

			position($curPopup);
			fill($curPopup, title, content);
			$global.append($poputWrap);
			$curPopup.find('a[data-close]').on('click', function() {
				$poputWrap.hide('slow');
			});
			return $poputWrap;
		}
	if (!PMS) {
		PMS = {};
	}
	return (
		$.popup = popup,
		$.PMS = PMS
	);
})(jQuery);