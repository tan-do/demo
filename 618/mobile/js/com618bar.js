//主会场url
var zhuhuichangUrl = "https://s.click.taobao.com/kQU8RQw";
var huicangUrlType = '61';//链接类型，默认参数：yr 预热，61 6.1日
//qiang100.com来源
if (document.domain === 'www.qiang100.com') {
    if(huicangUrlType == 'yr'){//预热
        zhuhuichangUrl = "https://s.click.taobao.com/AJD7VQw";
    }else if(huicangUrlType == '61'){//6.1
        zhuhuichangUrl = "https://s.click.taobao.com/uLbZEQw";
    }
}else{
    if (window.location.hash === '#xxl') {  //信息流来源
        if(huicangUrlType == 'yr'){//预热
            zhuhuichangUrl = 'https://s.click.taobao.com/WdZ4IQw';
        }else if(huicangUrlType == '61'){//6.1
            zhuhuichangUrl = 'https://s.click.taobao.com/XWHAEQw';
        }
    }else{
        if(huicangUrlType == 'yr'){//预热
            zhuhuichangUrl = 'https://s.click.taobao.com/kQU8RQw';
        }else if(huicangUrlType == '61'){//6.1
            zhuhuichangUrl = 'https://s.click.taobao.com/z4MNEQw';
        }
    }
}


/*公共底部*/
var comfoot = '<div class="bottom-nav">\
    <ul class="flex flex-align-center">\
    <a href="/huodong/618/2018/index.html" >\
    <li class="flex flex-pack-center flex-align-center">618省钱攻略</li></a>\
    <li class="flex flex-pack-center flex-align-center morehc" ><i class="hc"></i>更多会场</li>\
    <a href="https://www.qiang100.com/public/app/site/index.html" ><li class="flex flex-pack-center flex-align-center last"><i class="app"></i>打开APP</li></a>\
    </ul>\
    </div>\
    <div class="layer">\
    <i class="layer-icon"></i>\
    <div class="layer-content">\
    <div class="layer-link">\
    <p>\
    <a href="'+zhuhuichangUrl+'"  onclick="check_cps(this);" isconvert="1">\
    <img src="/huodong/618/2018/img/index/tc_1.png" alt="">\
    </a>\
    <a href="https://union-click.jd.com/jdc?e=0&p=AyIHUytaJQMiQwpDBUoyS0IQWhkeHAxFBUYPCllHGAdFBwtSQEJLcitMV1pFIEVedB1LQglGa1YHWmUebR1VYVYAVwUzUF9PAgllM2UOHmlWGlscHhMDSRhfBAIXDFEbUBQDIgJdGVgUChMGVitbFAMTBlIbXxcKIjdVGmtebBM3UhxTEgQRBFceaxUGEQFWGVsUBRMCURhrEjISBVEaXxICGwdVGDVUMiI3ZStrFzIS&t=W1dCFFlQCxxQVwhPRE5XDVULR0VFUFcZPGsCQEpQcgseOgpbV1sI">\
    <img src="/huodong/618/2018/img/index/tc_2.png" alt="">\
    </a>\
    </p>\
    <p>\
    <a href="/huodong/618/2018/miaosha.html" >\
    <img src="/huodong/618/2018/img/index/tc_3.png" alt="">\
    </a>\
    </p>\
    <p>\
    <a href="/huodong/618/2018/baokuan.html" >\
    <img src="/huodong/618/2018/img/index/tc_4.png" alt="">\
    </a>\
    <a href="/huodong/618/2018/chaopianyi.html" >\
    <img src="/huodong/618/2018/img/index/tc_5.png" alt="">\
    </a>\
    <a href="/huodong/618/2018/yushou.html" >\
    <img src="/huodong/618/2018/img/index/tc_6.png" alt="">\
    </a>\
    </p>\
    </div>\
    </div>';



function checkShow618Bottom($) {
    $('.comfoot').html(comfoot);


    /*更多会场*/
    $('.morehc').click(function () {
        if($('.layer').is(':hidden')){
            $('.layer').show();
        }else{
            $('.layer').hide();
        }
    });


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
}

if (typeof require != "undefined") {
    require(["jquery"], function($){
        checkShow618Bottom($);
    });
} else {
    checkShow618Bottom($);
}






