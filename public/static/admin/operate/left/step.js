/*
   	@require "/static/lib/jquery-1.11.2.min.js"

*/

(function() {



	var Tips = {
		ele: null,
		e: null,
		p: null,
		init: function(ele, e, reference) {
			this.ele && this.ele.css({
				visibility: 'hidden'
			});
			this.setBase(ele, e, reference);
			this.countTL();
		},
		setBase: function(ele, e, reference) {
			this.e = e;
			this.index = $('.layoutStyle').not('.hide');
			this.ele = ele;
			this.p = reference;
			this.bind();
		},
		bind: function() {
			$(document).on('click', function(e) {
				Tips.ele.css({
					visibility: 'hidden'
				});
			})
		},
		setTL: function(T, L) {
			this.ele.css({
				top: T + 'px',
				left: L + 'px',
				visibility: 'visible'
			});
		},
		countTL: function() {
			var width = this.ele.width(),
				height = this.ele.height(),
				maxHeight = this.p.height(),
				maxWidth = this.p.width(),
				top = this.e.clientY,
				left = this.e.clientX,
				disH = maxHeight - top,
				disW = maxWidth - left;

			if (disH <= height) {
				top = maxHeight - height;
			} else
			if (disW <= width) {
				left = maxWidth - width;
			}
			this.setTL(top, left);
		}
	}

	return $.PMS.menuMessage.ymenu = Tips;

})();