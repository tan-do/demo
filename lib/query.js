/*
 * @Author: Query 
 * @Date: 2018-04-25 17:11:37 
 * @Last Modified by: Query
 * @Last Modified time: 2018-04-28 13:36:55
 */



//时间戳格式化
function formatTimeString(timestamp) {
    var timeDiff = (new Date().getTime() - timestamp) / 1000;
    if (timeDiff >= 86400) {
        return parseInt(timeDiff / 86400) + '天前';
    }
    if (timeDiff >= 3600) {
        return parseInt(timeDiff / 3600) + '小时前';
    }
    if (timeDiff >= 60) {
        return parseInt(timeDiff / 60) + '分钟前';
    }
    if (timeDiff > 0) {
        return parseInt(timeDiff) + '秒前';
    }
    return "刚刚";
}




//让页面加载js和css文件
function loadJsCssFile(filename, filetype) {
    if (filetype == "js") {
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype == "css") {
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }
    if (typeof fileref != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
        return fileref;
    }
}



//时间倒计时
function countDown(btn) {
    var second = 60;
    var timer = null;
    timer = setInterval(function () {
        second -= 1;
        if (second > 0) {
            $(btn).val(second + "s后重新发送").attr('disabled', 'diabled');
        } else {
            clearInterval(timer);
            $(btn).val("免费获取验证码").removeAttr('disabled');
        }
    }, 1000);
}

//滚动到
function aniTo(ele, target, speed) {
    $(ele).on('click', function (event) {
        $("html,body").animate({ scrollTop: target }, speed);
    });
}


//选项卡切换
export function tabToggle(tabEle, tabList) {
    $(tabEle).on('click', function (event) {
        $(this).addClass('active').siblings().removeClass('active');
        var thisIndex = $(this).index();
        $(tabList).eq(thisIndex).show().siblings().hide();
    });
}

export function activeToggle(tabEle) {
    $(tabEle).on('click', function (event) {
        $(this).addClass('active').siblings().removeClass('active');
    });
}


export function goMobile(url) {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        window.location.href = url;
    }
    else {
        return;
    }
}

//自适应rem
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//url 字符串匹配
function urlTest(){
    var oHref = window.location.href;
    if (oHref.indexOf('https://www.qiang100.com/') > -1) {
        alert('进入百强网')
    
    }

    if (oHref.indexOf('https://item.jd.com/') > -1) {
        alert('进入京东详情页')
    
    }
    
    if (oHref.indexOf('https://detail.tmall.com') > -1) {
        alert('进入天猫详情页')
    
    
    }
}


//开关class
function toggleActive() {

    $('.tag-focus span').on('click', function (event) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
};