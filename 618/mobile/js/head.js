/*定义全局路径*/
var base = '/themes/baiqiang_v3_mobile2/Public';
var base2 = '/public';
//全局返回函数设置
function historyPlus (){
    if(window.history.length <= 1){
        if(!window.default_back_url){
            window.location.href = "/";
        }else{
            window.location.href = window.default_back_url;
        }
    }else{
        history.go(-1);
    }
}

var oWidth = document.documentElement.clientWidth;
var font_size =  oWidth*100/750;
oWidth = oWidth > 750 ? 750 : oWidth < 320 ? 320 : oWidth;

document.documentElement.style.fontSize = oWidth*100/750 + 'px';
window.onresize = function(){
    var oWidth = document.documentElement.clientWidth;
    oWidth = oWidth > 750 ? 750 : oWidth < 320 ? 320 : oWidth;
    document.documentElement.style.fontSize = oWidth*100/750 + 'px';
};


//百度统计
var _hmt = _hmt || [];
(function() {
    var baiduKey = 'a49e3a6f14cabbf51b6b5046313a3c4c';
    var myHost = window.location.host;
    if (myHost) {
        if (myHost.indexOf('.qiang100.com.cn') > 0) {
            baiduKey = 'fe9d47e91ff963c5f4743bc2d99c3935';
        }
    }
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?"+baiduKey;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
var baidu_event_prefix = '';
function addBaiduEvent(dataArray, with_xx) {
    if(_hmt && dataArray) {
        var prefix = baidu_event_prefix || '';

        //用于转化统计
        if (with_xx) {
            _hmt.push(['_trackEvent', 'xx_' + prefix + dataArray[0], dataArray[1], '-']);
        }

        //普通事件统计
        dataArray.splice(0, 0, '_trackEvent');
        dataArray[1] = prefix + dataArray[1];
        _hmt.push(dataArray);
    }
}

//
var domain = window.location.host.split(':')[0];
if (/^127\.|^192\.|^10\./.test(domain) === false) {
    domain = domain.substr(domain.indexOf('.'))
}

