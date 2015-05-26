/**
 * @require /static/widege/admin/popup/popup.js
 */
(function($) {
    var $textBtn,
        $rightGlobal = $('.rightContent'),
        $textarea = $('<div class="textareaDiv brick canMove"><textarea class="rightTextStyle">文本信息文本信息</textarea></div>');

    var $listBtn,
        $elseBox = $('<div class="gridly elseBox"></div>');
        $list = $('<ul class="rightTextList canMove brick"><li>内容1内容1内容1</li><li>内容2内容2内容2</li><li>内容3内容3内容3</li><li>内容4内容4内容4</li><li>内容5内容5内容5</li></ul>');

    var index = {
        init: function() {
            $textBtn = $("#textBtn");
            $listBtn = $("#listBtn");
            this.bindEvent();
        },
        bindEvent: function() {
            $textBtn.on("click", function(e) {
                $(".elseBox").append($textarea);
            });
            $listBtn.on("click", function(e) {
                $(".elseBox").append($list);
            });
            $textarea.on("dblclick", function(e) {
                $(e.target).css({
                    "border-color": "#A9A9A9",
                    "resize": "both",
                    "overflow":"auto"
                });
            });
            $textarea.on("blur", function(e) {
                $(e.target).css({
                    "border-color": "transparent",
                    "resize": "none",
                    "overflow":"hidden"
                });
            });

            $(".confirm").on("click", function(event) {
                $('.gridly').gridly();
            });
            $(".selectModule").on("click", function(event) {
                $('.gridly').gridly();
            });
        }
    };

    return $.PMS.dMenuMssageElse = {
        index: index
    };
})(jQuery);