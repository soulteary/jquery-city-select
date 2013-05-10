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
                id: 'id',
                name:'name',
                children:'children',
                metaTag:'data-extra',
                idVal: false
            }, params);
            var target = $(this);
            if (!target.length) {
                return this;
            } else if (target.length == 1) {
                var all = target;
                var data = params.data;
                var html = [];

                for (var oo in data) {
                    html.push('<option '+params.metaTag+'="' + data[oo][params.id] + '">' + data[oo][params.name] + '</option>');
                    for (var xx in data[oo].children) {
                        if(params.idVal){
                            html.push('<option '+params.metaTag+'="' + data[oo].children[xx][params.id] + '" value="' + data[oo].children[xx][params.name] + '">' + data[oo].children[xx][params.name] + '</option>');
                        }else{
                            html.push('<option '+params.metaTag+'="' + data[oo].children[xx][params.id] + '" value="' + data[oo].children[xx][params.id] + '">' + data[oo].children[xx][params.name] + '</option>');
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
                    if(params.idVal){
                        html.push('<option '+params.metaTag+'="' + oItem[params.id] + '" value="' + oItem[params.id] + '">' + oItem[params.name] + '</option>');

                    }else{
                        html.push('<option '+params.metaTag+'="' + oItem[params.id] + '" value="' + oItem[params.name] + '">' + oItem[params.name] + '</option>');

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
                                    if (oItem[params.id] == extra && oItem.children) {
                                        oItem = oItem.children;
                                        for (var sItem in oItem) {
                                            if(params.idVal){
                                                html.push('<option '+params.metaTag+'="' + oItem[sItem][params.id] + '" value="' + oItem[sItem][params.id] + '">' + oItem[sItem][params.name] + '</option>');

                                            }else{
                                                html.push('<option '+params.metaTag+'="' + oItem[sItem][params.id] + '" value="' + oItem[sItem][params.name] + '">' + oItem[sItem][params.name] + '</option>');

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