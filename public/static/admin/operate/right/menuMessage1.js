/**
 * @require /static/widege/admin/popup/popup.js
 */
(function($) {
    var $formBtn, val, checked, num = 0,
        i,
        lin, lin1,
        $rightGlobal = $('.rightContent'),
        popupContentForm = __inline('/page/admin/operate/right/menuMessageForm.tpl'),
        $rPopupForm = $.popup('表单模块', popupContentForm),
        inputText = '<input type="" name="" id="" class="">',
        // $formText = $('<form action="#" class="formText gridly"></form>'),
        divDom = $('<div></div>');

    var $tableTextRow, $tableTextColumn, tableBtn, tr,
        popupContentTable = __inline('/page/admin/operate/right/menuMessageTable.tpl'),
        $rPopupTable = $.popup('表格模块', popupContentTable),
        $table = $('<table class="rightTableStyle"></table>'),
        $elseBox = $('<div class="gridly elseBox"></div>'),
        td = "<td>内容</td>",
        th = "<th>内容</th>",
        $ts = $(".ts"),
        nowTs;

    var elseBtn,
        popupContentElse = __inline('/page/admin/operate/right/menuMessageElse.tpl'),
        $rPopupElse = $.popup('其他模块', popupContentElse);

    var index = {
        init: function() {
            $formBtn = $("#formBtn");
            $tableBtn = $("#tableBtn");
            $elseBtn = $("#elseBtn");
            // $rightGlobal.append($formText);
            $rightGlobal.append($elseBox);
            this.bindEvent();
        },
        bindEvent: function() {
            var $self = this;
            $formBtn.on("click", function(e) {
                $rPopupForm.show('slow');
                return false;
            });
            $tableBtn.on("click", function(e) {
                $rPopupTable.show('slow');
                return false;
            });
            $elseBtn.on("click", function(e) {
                $rPopupElse.show('slow');
                return false;
            });
            $ts.on("click", function(e) {
                $ts.css("border-color", "transparent");
                $(this).css("border-color", "#44cc44");
                nowTs = $(this).attr("id");
            });
            $rPopupForm.find(".confirm").on("click", function(event) {
                checked = $(event.target).parents(".popup-wrap").find(".formStyle:checked");
                val = checked.val();
                if (val === null) {
                    alert("您还未选择表单模块属性!");
                    return false;
                } else {
                    num++;
                    $self.createInput(checked.attr("data-selectInput"), !!$(checked).parent().find(".formStyle_addlabel:checked")[0]);
                }
            });
            $rPopupTable.find(".confirm").on("click", function(event) {
                $tableTextRow = $(event.target).parents(".popup-wrap").find("#tableTextRow").val();
                $tableTextColumn = $(event.target).parents(".popup-wrap").find("#tableTextColumn").val();
                if ($tableTextColumn === "" || $tableTextRow === "") {
                    alert("请填写行和列!");
                    return false;
                } else {
                    $self.createTable($tableTextRow, $tableTextColumn);
                }
            });
            $(".confirm").on("click", function(event) {
                $('.gridly').gridly();
            });
            $.PMS.dMenuMssageElse.index.init();
        },
        createInput: function(data, addlabel) {
            divDom = $('<div class="canMove brick small"></div>');
            lin = $(inputText).attr({
                type: data,
                name: "rightMoudle-" + data + num,
                id: "rightMoudle_" + data + num,
                class: "rightInputStyle"
            });
            if (addlabel) {
                divDom.append($('<label class="addlabel">添加内容:</label>'));
            }
            divDom.append(lin);
            switch (data) {
                case "file":
                case "hidden":
                case "image":
                case "password":
                case "reset":
                case "submit":
                case "text":
                    break;
                case "button":
                    lin.attr("value", "按钮");
                    break;
                case "checkbox":
                    divDom.append($('<label class="addLabelText">checkbox 内容</label>'));
                    break;
                case "radio":
                    divDom.append($('<label class="addLabelText">radio 内容</label>'));
                    break;
            }
            $(".elseBox").append(divDom);
        },
        createTable: function(row, column) {
            switch (nowTs) {
                case "ts1":
                    {
                        lin = "";
                        for (i = 0; i < column; i++) {
                            lin += td;
                        }
                        tr = "<tr>" + lin + "</tr>";
                        lin = "";
                        for (i = 0; i < row; i++) {
                            lin += tr;
                        }
                    }
                    break;
                case "ts2":
                    {
                        lin = "";
                        lin1 = "";
                        for (i = 0; i < column; i++) {
                            lin += td;
                        }
                        tr = "<tr>" + lin + "</tr>";
                        for (i = 0; i < column; i++) {
                            lin1 += th;
                        }
                        lin = "<tr>" + lin1 + "</tr>";
                        for (i = 1; i < row; i++) {
                            lin += tr;
                        }
                    }
                    break;
                case "ts3":
                    {
                        lin = "";
                        lin1 = "";
                        lin += th;
                        for (i = 1; i < column; i++) {
                            lin += td;
                        }
                        tr = "<tr>" + lin + "</tr>";
                        for (i = 0; i < column; i++) {
                            lin1 += th;
                        }
                        lin = "<tr>" + lin1 + "</tr>";
                        for (i = 1; i < row; i++) {
                            lin += tr;
                        }
                    }
                    break;
                default:
                    alert("请选择table样式");
                    return false;
            }
            lin = '<table class="rightTableStyle brick canMove">' + lin + '</table>';
            $(".elseBox").append(lin);
        }
    };
    return $.PMS.dMenuMssageForm = {
        index: index
    };
})(jQuery);