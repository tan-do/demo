//淘点金
(function(win,doc){
    win.bq_page_tbPid = 'mm_112928821_17178470_71528365';//qiang100.com.cn-Y09999

    var s = doc.createElement("script"), h = doc.getElementsByTagName("head")[0];
    if (!win.alimamatk_show) {
        s.charset = "gbk";
        s.async = true;
        s.src = "//alimama.alicdn.com/tkapi.js";
        h.insertBefore(s, h.firstChild);
    };
    var o = {
        pid: win.bq_page_tbPid,/*推广单元ID，用于区分不同的推广渠道*/
        appkey: "",/*通过TOP平台申请的appkey，设置后引导成交会关联appkey*/
        unid: "",/*自定义统计字段*/
        type: "click" /* click 组件的入口标志 （使用click组件必设）*/
    };
    win.alimamatk_onload = win.alimamatk_onload || [];
    win.alimamatk_onload.push(o);
})(window,document);

/*更多会场*/
function toOpenHc() {
    if($('.layer').is(':hidden')){
        $('.layer').show();
    }else{
        $('.layer').hide();
    }
}

function toShare() {
    if($('#share').is(':hidden')){
        $('.share-bg').show();
        $('#share').slideDown(300);
    }else{
        $('.share-bg').hide();
        $('#share').slideUp(300);
    }
}

/*分享用到*/
nativeShare.setShareData(shareData);
function call(command) {
    try {
        nativeShare.call(command)
    } catch (err) {
        // 如果不支持，你可以在这里做降级处理
        alert(err.message)
    }
}
function setTitle(title) {
    nativeShare.setShareData({
        title: title,
    })
}


$('.js-icon-bar').click(function(){
    $('.right-menu-bg').css('height',$(window).height()+300 );
    if($('.right-menu').is(':hidden')){
        $('.right-menu').slideDown(300);
    }else{
        $('.right-menu').slideUp(300);
    }
});
$('.right-menu .menu-close').click(function(){
    $('.right-menu').slideUp(100);
    return false;
});
$('.right-menu-bg').click(function(){
    $('.right-menu').slideUp(100);
    return false;
});


/*公共底部*/
var comfoot = '<div class="bottom-nav">\
    <ul class="flex flex-align-center">\
    <a href="./index.html" >\
    <li class="flex flex-pack-center flex-align-center">618省钱攻略</li></a>\
    <li class="flex flex-pack-center flex-align-center morehc" onclick="toOpenHc()"><i class="hc"></i>更多会场</li>\
    <a href="https://www.qiang100.com/public/app/site/index.html" ><li class="flex flex-pack-center flex-align-center last"><i class="app"></i>打开APP</li></a>\
    </ul>\
    </div>\
    <div class="share-bg"></div>\
    <div id="share">\
    <ul class="share">\
    <li onclick="call()"><img src="./img/fxtc_3.png"><div>通用分享</div></li>\
    <li onclick="call(\'wechatFriend\')"><img src="./img/fxtc_1.png"><div>微信好友</div></li>\
    <li onclick="call(\'wechatTimeline\')"><img src="./img/fxtc_2.png"><div>朋友圈</div></li>\
    <li onclick="call(\'qqFriend\')"><img src="./img/fxtc_4.png"><div>QQ</div></li>\
    <li onclick="call(\'qZone\')"><img src="./img/fxtc_5.png"><div>QQ空间</div></li>\
    <li onclick="call(\'weibo\')"><img src="./img/fxtc_6.png"><div>微博</div></li>\
    </ul>\
    </div>\
    <div class="layer">\
    <i class="layer-icon"></i>\
    <div class="layer-content">\
    <div class="layer-link">\
    <p>\
    <a href="https://s.click.taobao.com/8eD8VQw"  onclick="check_cps(this);" isconvert="1">\
    <img src="./img/index/tc_1.png" alt="">\
    </a>\
    <a href="https://union-click.jd.com/jdc?e=0&p=AyIHUytaJQMiQwpDBUoyS0IQWhkeHAxFBUYPCllHGAdFBwtSQEJLcitMV1pFIEVedB1LQglGa1YHWmUebR1VYVYAVwUzUF9PAgllM2UOHmlWGlscHhMDSRhfBAIXDFEbUBQDIgJdGVgUChMGVitbFAMTBlIbXxcKIjdVGmtebBM3UhxTEgQRBFceaxUGEQFWGVsUBRMCURhrEjISBVEaXxICGwdVGDVUMiI3ZStrFzIS&t=W1dCFFlQCxxQVwhPRE5XDVULR0VFUFcZPGsCQEpQcgseOgpbV1sI">\
    <img src="./img/index/tc_2.png" alt="">\
    </a>\
    </p>\
    <p>\
    <a href="./miaosha.html" >\
    <img src="./img/index/tc_3.png" alt="">\
    </a>\
    </p>\
    <p>\
    <a href="./baokuan.html" >\
    <img src="./img/index/tc_4.png" alt="">\
    </a>\
    <a href="./chaopianyi.html" >\
    <img src="./img/index/tc_5.png" alt="">\
    </a>\
    <a href="./yushou.html" >\
    <img src="./img/index/tc_6.png" alt="">\
    </a>\
    </p>\
    </div>\
    </div>';

$('.comfoot').html(comfoot);

setTimeout(function () {
    /*分享开关*/
    $('.share-bg').click(function () {
        $('.share-bg').hide();
        $('#share').slideUp(300);
    });

    $('.layer-content').on('click',function(e){
        e.stopPropagation()
    });

    $('.layer').on('click',function(){
        $(this).hide()
    })
},500);


//自定义统计
function sts(type, key, id) {
    $.get("/index.php?g=api&m=statistics&a=touch", {type: type, key: key, id: id}, function(res){
        console.log(res);
    },"json");
}

//页面访问统计
$(function(){
    sts('diy_2018_618_visit_mobile', 'visit_count', window.location.host);
});

function isMobile() {
    var ua  = window.navigator.userAgent.toLocaleLowerCase();
    var matchedRE = /iphone|android|symbianos|windows\sphone/g;
    var matchedRE2 = /micromessenger|qq\/[\d.]+/i;
    if (matchedRE.test(ua) || matchedRE2.test(ua)) {
        return true;
    }
    return false;
}
