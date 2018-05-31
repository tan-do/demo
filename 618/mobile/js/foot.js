//淘点金
(function(win,doc){
    win.bq_page_tbPid = '';
    if (win.location.host === 'm.qiang100.com' ) {
        win.bq_page_tbPid = 'mm_112928821_13812316_71502604';//qiang100.com-Y09999
    } else {
        if (win.location.hash === '#xxl') {
            win.bq_page_tbPid = 'mm_112928821_17178470_71524414';//qiang100.com.cn-Y09997
        } else {
            win.bq_page_tbPid = 'mm_112928821_17178470_71528365';//qiang100.com.cn-Y09999
        }
    }

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
