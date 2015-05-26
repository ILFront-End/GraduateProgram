/**
 * @require /static/widege/admin/popup/popup.js
 */
(function($) {
    var $element,
        $rightContent = $(".rightContent"),
        popupContent1 = __inline('/page/admin/operate/right/menuMessage1.tpl'),
        $rPopupOne = $.popup('添加模块', popupContent1),
        $deleteDom = $('<div class="deleteDom">删除</div>');
    $.PMS.dMenuMssageForm.index.init();
    var index = {
        init: function() {
            this.bindEvent();
        },
        bindEvent: function() {
            var $self = this;
            $rightContent.on("contextmenu", function(e) {

                e.stopPropagation();
                switch (e.which) {
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        if (jQuery.inArray(e.target, $(".canMove")) > 0 || $(e.target).parents(".canMove").length > 0) {
                            $element = (jQuery.inArray(e.target, $(".canMove")) > 0) ? $(e.target) : $(e.target).parents(".canMove");
                            $self.moveElement({
                                element: $element,
                                clientX: e.clientX,
                                clientY: e.clientY,
                            });

                        } else {
                            $rPopupOne.show('slow');
                        }
                        return false;
                        break;
                }
            });
        },
        moveElement: function(obj) {
            var ele = obj.element,
                clientX = obj.clientX,
                clientY = obj.clientY;
            if ($(".deleteDom").length === 0) {
                $rightContent.append($deleteDom);
            }
            $(".deleteDom").css({
                "top": (clientY - 60) + "px",
                "left": (clientX - 170) + "px"
            });
            $(".deleteDom").show();
            $(".deleteDom").on("click", function(event) {
                $(".deleteDom").hide();
                ele.remove();
                $('.gridly').gridly();
            });
        }
    };
    index.init();
})(jQuery);