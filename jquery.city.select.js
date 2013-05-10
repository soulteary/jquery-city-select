/*    SOULTEARY.COM
        _____ ____  __  ____  _______________    ______  __
      / ___// __ \/ / / / / /_  __/ ____/   |  / __ \ \/ /
     \__ \/ / / / / / / /   / / / __/ / /| | / /_/ /\  /
   ___/ / /_/ / /_/ / /___/ / / /___/ ___ |/ _, _/ / /
 /____/\____/\____/_____/_/ /_____/_/  |_/_/ |_| /_/   */
;
(function ($) {
    $.fn.extend({
        "citylist": function (params) {
            params = $.extend({
                id: 'id',                   //数据的ID名称
                name: 'name',                //数据的VALUE名称
                children: 'children',        //数据子元素的KEY的名称
                metaTag: 'data-extra',       //将数据元素的ID存放到HTML元素的标签中
                idVal: false,               //使用ID做OPTION的VALUE
                data: false,                 //默认数据
                selected: false              //选中的元素eg: 14 / [14:1401]
            }, params);

            var target = $(this);
            var hasSelected = ' selected="selected"';
            var html = [];

            if (!target.length) {
                return this;
            } else if (target.length == 1) {
                var all = target;
                var data = params.data;

                for (var oo in data) {
                    html.push('<option ' + params.metaTag + '="' + data[oo][params.id] + '"' + ((params.selected && (params.selected == data[oo][params.id])) ? hasSelected : '') + '>' + data[oo][params.name] + '</option>');
                    for (var xx in data[oo][params.children]) {
                        if (params.idVal) {
                            html.push('<option ' + params.metaTag + '="' + data[oo][params.children][xx][params.id] + '" value="' + data[oo][params.children][xx][params.name] + '"' + ((params.selected && (params.selected == data[oo][params.children][xx][params.id])) ? hasSelected : '') + '>' + data[oo][params.children][xx][params.name] + '</option>');
                        } else {
                            html.push('<option ' + params.metaTag + '="' + data[oo][params.children][xx][params.id] + '" value="' + data[oo][params.children][xx][params.id] + '"' + ((params.selected && (params.selected == data[oo][params.children][xx][params.id])) ? hasSelected : '') + '>' + data[oo][params.children][xx][params.name] + '</option>');
                        }
                    }
                }
                html = html.join('');
                all.find('option').remove();
                all.append(html);

            } else if (target.length == 2) {
                var province = target.eq(0);
                var city = target.eq(1);

                var html = [], oItem;
                for (var item in params.data) {
                    oItem = params.data[item];
                    if (params.idVal) {
                        html.push('<option ' + params.metaTag + '="' + oItem[params.id] + '" value="' + oItem[params.id] + '"' + ((params.selected && (params.selected[0] == oItem[params.id])) ? hasSelected : '') + '>' + oItem[params.name] + '</option>');

                    } else {
                        html.push('<option ' + params.metaTag + '="' + oItem[params.id] + '" value="' + oItem[params.name] + '"' + ((params.selected && (params.selected[0] == oItem[params.id])) ? hasSelected : '') + '>' + oItem[params.name] + '</option>');

                    }
                }
                html = html.join('');
                province.find('option').remove();
                province.append(html);

                var provinces = province.find('option');
                province.on('change',function () {
                    var curSelect = $(this).val();
                    provinces.each(function (k, v) {
                        if ($(v).val() == curSelect) {
                            return (function (v) {
                                var extra = $(v).attr(params.metaTag);
                                var html = [], oItem;
                                for (var item in params.data) {
                                    oItem = params.data[item];
                                    if (oItem[params.id] == extra && oItem[params.children]) {
                                        oItem = oItem[params.children];
                                        for (var sItem in oItem) {
                                            if (params.idVal) {
                                                html.push('<option ' + params.metaTag + '="' + oItem[sItem][params.id] + '" value="' + oItem[sItem][params.id] + '"' + ((params.selected && (params.selected[1] == oItem[sItem][params.id])) ? hasSelected : '') + '>' + oItem[sItem][params.name] + '</option>');

                                            } else {
                                                html.push('<option ' + params.metaTag + '="' + oItem[sItem][params.id] + '" value="' + oItem[sItem][params.name] + '"' + ((params.selected && (params.selected[1] == oItem[sItem][params.id])) ? hasSelected : '') + '>' + oItem[sItem][params.name] + '</option>');

                                            }
                                        }
                                        break;
                                    }
                                }
                                html = html.join('');
                                city.find('option').remove();
                                city.append(html);
                            }(v));
                        }
                    })

                }).trigger('change');

            }
            return this;
        }
    });
})(jQuery, 'SOULTEARY.COM');