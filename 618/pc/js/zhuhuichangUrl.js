//主会场url
var zhuhuichangUrl = "https://s.click.taobao.com/3Yt8RQw";
var huicangUrlType = 'yr';//链接类型，默认参数：yr 预热，61 6.1日

//qiang100.com来源
if (document.domain === 'www.qiang100.com') {
    if(huicangUrlType == 'yr'){//预热
        zhuhuichangUrl = "https://s.click.taobao.com/RGd7VQw";
    }else if(huicangUrlType == '61'){//6.1
        zhuhuichangUrl = "https://s.click.taobao.com/H2fZEQw";
    }
}else{
    if(huicangUrlType == 'yr'){//预热
        zhuhuichangUrl = "https://s.click.taobao.com/3Yt8RQw";
    }else if(huicangUrlType == '61'){//6.1
        zhuhuichangUrl = "https://s.click.taobao.com/YGPNEQw";
    }
}


//jd 618 url sidebar.js中引用
var jdUrl = "https://sale.jd.com/act/XAhdysDo4P.html?cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_1000061539_&utm_term=d6a7710535dc4e2f8c0248b22adfce78&abt=3";
