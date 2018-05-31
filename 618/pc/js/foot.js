//淘点金
(function(win,doc){
    win.bq_page_tbPid = '';
    if (win.location.host === 'www.qiang100.com' ) {
        win.bq_page_tbPid = 'mm_112928821_13812316_71524415';//qiang100.com-X09999
    } else {
        if (win.location.hash === '#xxl') {
            win.bq_page_tbPid = 'mm_112928821_17178470_71514593';//qiang100.com.cn-X09997
        } else {
            win.bq_page_tbPid = 'mm_112928821_17178470_71510584';//qiang100.com.cn-X09999
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

//自定义统计
function sts(type, key, id) {
    $.get("/index.php?g=api&m=statistics&a=touch", {type: type, key: key, id: id}, function(res){
        console.log(res);
    },"json");
}

//页面访问统计
$(function(){
    sts('diy_2018_618_visit_pc', 'visit_count', window.location.host);
});


