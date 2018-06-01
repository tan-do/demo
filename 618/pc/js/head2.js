function getUserAvatarUrl(avatar) {
    if(!avatar || avatar == 'default.png'||avatar == '/public/images/default.png'){
        return "/public/images/default.png";
    }
    if (avatar.indexOf("http:")==0 || avatar.indexOf("https:")==0 || avatar.indexOf("//")==0 || avatar.indexOf('/data/upload/')==0){
        return avatar;
    }
    if (avatar.indexOf('data/upload/')==0) {
        return '/' + avatar;
    }
    return "/data/upload/avatar/" + avatar;
}

$('.top-nav-all_2 .baoliao').hover(function () {
    $(this).find('ul').show();
    $(this).find('.iconfont').removeClass('icon-xiangxia').addClass('icon-xiangshangjiantou1');
},function () {
    $(this).find('ul').hide();
    $(this).find('.iconfont').removeClass('icon-xiangshangjiantou1').addClass('icon-xiangxia');
});

$('#brand-search-keyword').focus(function () {
    $('.bq-lx-search-key').val('');
});

//搜索品牌框
//搜索品牌框
function searchBrandEnter() {
    var keyword = $('#brand-search-keyword').val().trim();
    var jumpto = '';
    if (keyword) {
        addBaiduEvent(['main-search-submit', '-', '-']);

        var bqLxSearchKey = $('.bq-lx-search-key').val();
        if(bqLxSearchKey){
            bqLxSearchKey = bqLxSearchKey.split('|');
            if(bqLxSearchKey[0] == 'brand'){
                if(bqLxSearchKey[2] == 1){
                    jumpto = 'brand';
                }else{
                    var uuid = bqLxSearchKey[1];
                    var url = "/pinpai/bqxxx/";
                    url = url.replace('bqxxx', uuid);
                    window.open(url);
                    return false;
                }
            }else if(bqLxSearchKey[0] == 'special'){
                if(bqLxSearchKey[2] == 1){
                    jumpto = 'special';
                }else {
                    var uuid = bqLxSearchKey[1];
                    var url = "/zhuanti/bqxxx.html";
                    url = url.replace('bqxxx', uuid);
                    window.open(url);
                    return false;
                }
            }else if(bqLxSearchKey[0] == 'coupon'){
                var url = "/zhi/youhuiquan/";
                url = url + (url.indexOf('?') == -1 ? '?' : '&') + 'keyword=' + encodeURIComponent(keyword.replace("-优惠券",""));
                window.open(url);
                return false;
            }else if(bqLxSearchKey[0] == 'zhi'){
                var url = "/zhi/search";
                url = url + (url.indexOf('?') == -1 ? '?':'&') + 'name=' + encodeURIComponent(keyword.replace("-相关折扣",""));
                window.open(url);
                return false;
            }else if(bqLxSearchKey[0] == 'xiu'){
                var uuid = bqLxSearchKey[1];
                var url = "/xiu/zhuanti-bqxxx.html";
                url = url.replace('bqxxx', uuid);
                window.open(url);
                return false;
            }
            return false;
        }
        var form = $('#brand-search-form');
        var url = form.attr('action');
        if (url.indexOf('&') > -1) {
            url = url + "&tab=all&jump="+jumpto+"&keyword=" + encodeURIComponent(keyword);
        } else {
            url = url + '?tab=all&jump='+jumpto+'&keyword=' + encodeURIComponent(keyword);
        }
        //form.attr('action', url);
        location.href = url ;
        return false;
    }else{
        var d = window.artDialog({
            content: '搜索内容不能为空',
            quickClose: true// 点击空白处快速关闭
        });

        d.show($('#brand-search-keyword').get(0));
        return false;
    }
}


$(function($) {
    $("#brand-search-keyword").bigAutocomplete({
        url: '/index.php?g=Home&m=Search&a=searchTipNew',
        reqCallback: function(data) {
            data.tab = 'all';
        },
        viewCallback: function(item) {
            if(item.lx == 1){
                return '<dt data="' + item.mode + '" uuid="' + item.uuid + '" lx="' + item.lx + '" name="' + item.name + '" >' + item.title + '</dt><dd></dd>';
            }else{
                return '<dt data="' + item.mode + '" uuid="' + item.uuid + '" lx="' + item.lx + '" name="' + item.name + '" style="color: #dd2727;">' + item.title + '</dt><dd></dd>';
            }
        },
        callback: function(item) {
            console.log(item);
            var keyword = item.title;
            var clickYes = false;
            $(document).on("click", "dl.searchTipLine", function(){
                //console.log(clickYes);
                if(clickYes){
                    return false;
                }
                clickYes = true;
                var name = $(this).find("dt").attr('name');
                var mode = $(this).find("dt").attr('data');
                var uuid = $(this).find("dt").attr('uuid');
                var lx = $(this).find("dt").attr('lx');

                if(lx == 1){
                    var form = $('#brand-search-form');
                    var url = form.attr('action');
                    url = url + (url.indexOf('?') == -1 ? '?':'&') + 'tab=all&jump='+mode+'&keyword=' + encodeURIComponent(keyword);
                    location.href = url;
                }else{
                    if (mode == 'brand') {
                        var url = "/pinpai/bqxxx/";
                        url = url.replace('bqxxx', uuid);
                        window.open(url);
                    }else if(mode == 'special'){
                        var url = "/zhuanti/bqxxx.html";
                        url = url.replace('bqxxx', uuid);
                        window.open(url);
                    }else if(mode == 'xiu'){
                        var url = "/xiu/zhuanti-bqxxx.html";
                        url = url.replace('bqxxx', uuid);
                        window.open(url);
                    }else if(mode == 'zhi'){
                        var url = "/zhi/search";
                        url = url + (url.indexOf('?') == -1 ? '?':'&') + 'name=' + encodeURIComponent(name);
                        window.open(url);
                    }else if(mode == 'coupon'){
                        var url = "/zhi/youhuiquan/";
                        url = url + (url.indexOf('?') == -1 ? '?':'&') + 'keyword=' + encodeURIComponent(name);
                        window.open(url);
                    } else  {
                        var form = $('#brand-search-form');
                        var url = form.attr('action');
                        url = url + (url.indexOf('?') == -1 ? '?':'&') + 'tab=all&keyword=' + encodeURIComponent(keyword);
                        location.href = url;
                    }
                    return false;
                }
            });
        }
    });
    $(document).on('focus','#brand-search-keyword',function(){
        $('.search-label').hide();
        $('.input-group-btn').addClass('active-search-btn')
    }).on('blur','#brand-search-keyword',function(){
        $('.search-label').show();
        $('.input-group-btn').removeClass('active-search-btn')
    });
});
//失去焦点，搜索下拉关闭
window.onblur = function () {
    $('#bigAutocompleteContent').hide();
};
window.onresize = function(){
    $('#bigAutocompleteContent').hide();
};



$(window).on('nav.login.change', function(event, data) {
    if(data.status == 1) {
        $(".top-div .headicon").attr("src", getUserAvatarUrl(data.user.avatar));
        $(".nav-in-right .login").html("<a target='_blank' href='/index.php?g=user&m=center&a=index' class='me' id='my-baiqiang'>我的百强</a>");

        $(".user-nicename").text(data.user.user_nicename!=""?data.user.user_nicename:data.user.user_login);
        //消息
        $(".top-div .msg-num").text(data.message);
        //我的足迹
        var history = data.history;
        var historyHtml = '';
        $.each(history, function(index, val) {
            historyHtml += '<a target="_blank" style="width:30px;height:30px;" class="js-size-control" href="'+val.url+'" title="'+val.title+'"><img style="margin-left: -1px;margin-top: -1px;" src="'+ val.logo + '"></a>';
        });
        $(historyHtml).appendTo('.footmark');

        setTimeout(function(){

            $('.js-size-control').each(function(){
                $(this).imagefit({
                    ignore: '.ignore',
                    mode: 'inside',
                    force: 'true',
                    halign: 'center',
                    valign: 'middle',
                    onStart: function (index, container, imagecontainer) {
                        /* Some code */
                    },
                    onLoad: function (index, container, imagecontainer) {
                        /* Some code */
                    },
                    onError: function (index, container, imagecontainer) {
                        /* Some code */
                    }
                });
            });
        },100);

        $(".offline").hide();
        $(".online").removeClass('hidden');
        $('#my-baiqiang').popoverx({
            animation: true,
            placement: 'bottom',
            fire_on: 'hover',
            hover_delay_close: 10000000,
            ensure_visiable: true,
            html: true,
            content: function() {
                return $("#my-baiqiang-popover-content").html();
            },
            template: $("#my-baiqiang-popover-template").html(),
        });

        $(window).on('scroll',function(){
            $('#my-baiqiang').add('#navbar-weixin').popoverx('resetPosition');
        })
    }
});
$(function($) {
    $.post("/index.php?g=user&m=index&a=is_login",{},function(data){
        $(window).trigger('nav.login.change', data);
    });
});