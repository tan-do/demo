/*
 * @Author: Query 
 * @Date: 2018-04-25 17:11:37 
 * @Last Modified by: Query
 * @Last Modified time: 2018-05-28 10:29:47
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


// 获取元素样式兼容IE和Chrome
function getStyle(oEle, attr) {
    return oEle.currentStyle ? obj.currentStyle[attr] : getComputedStyle(oEle)[attr];
}

// 运动函数
function doMove(oEle, attr, speed, target, endFn) {
    // 初始化判断速度正负值
    // 注意attr传参时以top和left为上下左右的基准
    speed = parseInt(getStyle(oEle, attr)) < target ? speed : -speed;
    clearInterval(oEle.timer);
    oEle.timer = setInterval(function () {
        var posi = parseInt(getStyle(oEle, attr)) + speed;
        if (posi > target && speed > 0 || posi < target && speed < 0) {
            posi = target;
        }
        oEle.style[attr] = posi + 'px';
        if (posi == target) {
            clearInterval(oEle.timer);
            endFn && endFn(); //回调函数
        }
    }, 30);
}

// 系统时间函数
function sysDate(oEle, format) {
    fnTime();

    function fnTime() {
        var myTime = new Date();
        // number
        var iYear = myTime.getFullYear();
        var iMonth = myTime.getMonth() + 1;
        var iDate = myTime.getDate();
        var iWeek = myTime.getDay();
        var iHours = myTime.getHours();
        var iMin = myTime.getMinutes();
        var iSec = myTime.getSeconds();
        var str, week, year, time, date = '';

        if (iWeek === 0) iWeek = '星期日';
        if (iWeek === 1) iWeek = '星期一';
        if (iWeek === 2) iWeek = '星期二';
        if (iWeek === 3) iWeek = '星期三';
        if (iWeek === 4) iWeek = '星期四';
        if (iWeek === 5) iWeek = '星期五';
        if (iWeek === 6) iWeek = '星期六';

        week = iWeek;
        year = iYear + '年' + iMonth + '月' + iDate + '日 ';
        time = toTwo(iHours) + ' : ' + toTwo(iMin) + ' : ' + toTwo(iSec);
        date = iYear + '年' + iMonth + '月' + iDate + '日 ' + iWeek + ' ' + toTwo(iHours) + ' : ' + toTwo(iMin) + ' : ' + toTwo(iSec);

        if (format == 'year') str = year;
        if (format == 'week') str = week;
        if (format == 'time') str = time;
        if (format == 'date') str = date;

        oEle.innerHTML = str;
    }

    function toTwo(n) {
        return n < 10 ? '0' + n : '' + n;
    }
    setInterval(fnTime, 1000);
}

// 倒计时








   add(a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
    },

    sub(a, b) {
        var c, d, e;
        try {
            c = a.toString().split(".")[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split(".")[1].length;
        } catch (f) {
            d = 0;
        }
        return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
    },

    mul(a, b) {
        var c = 0,
            d = a.toString(),
            e = b.toString();
        try {
            c += d.split(".")[1].length;
        } catch (f) {}
        try {
            c += e.split(".")[1].length;
        } catch (f) {}
        return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
    },

    div(a, b) {
        var c, d, e = 0,
            f = 0;
        try {
            e = a.toString().split(".")[1].length;
        } catch (g) {}
        try {
            f = b.toString().split(".")[1].length;
        } catch (g) {}
        return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
    }


