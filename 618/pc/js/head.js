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
function isMobile() {
    var ua  = window.navigator.userAgent.toLocaleLowerCase();
    var matchedRE = /iphone|android|symbianos|windows\sphone/g;
    var matchedRE2 = /micromessenger|qq\/[\d.]+/i;
    if (matchedRE.test(ua) || matchedRE2.test(ua)) {
        return true;
    }
    return false;
}