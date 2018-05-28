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

//搜索品牌框
function searchBrandEnter() {
    var keyword = $('#brand-search-keyword').val().trim();
    if (keyword) {
        var form = $('#brand-search-form');
        var url = form.attr('action');
        if (url.indexOf('&') > -1) {
            url = url + "&tab=all&keyword=" + keyword;
        } else {
            url = url + '?tab=all&keyword=' + keyword;
        }
        form.attr('action', url);
    }else{
        var d = window.artDialog({
            content: '搜索内容不能为空',
            quickClose: true// 点击空白处快速关闭
        });

        d.show($('#brand-search-keyword').get(0));
        return false;
    }
}
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
            var mode = item.mode;
            $(document).on("click", "dl.searchTipLine", function(){
                var keyword = $(this).find("dt").text();
                if (mode == 'brand'){
                    var uuid = item.uuid;
                    var url = "/index.php?g=Home&m=Brand&a=detail";
                    url = url + '&brandid=' + uuid;
                    window.open(url);
                } else  {
                    var form = $('#brand-search-form');
                    var url = form.attr('action');
                    if (url.indexOf('&') > -1) {
                        url = url + "&tab=all&keyword=" + keyword;
                    } else {
                        url = url + '?tab=all&keyword=' + keyword;
                    }
                    location.href = url;
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