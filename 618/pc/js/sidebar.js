var side = $('\
    <section class="side">\
        <div class="side-bar">\
            <i class="shouqi">\
                <img src="img/sidebar-shouqi.png" alt="">\
            </i>\
            <ul>\
                <li>\
                    <img src="img/sidebar-1.png" alt="">\
                    <a href="index.html"><img src="img/sidebar-2.png" alt=""></a>\
                </li>\
                <li>\
                    <a href="">\
                        <img src="img/sidebar-3.png" alt="">\
                    </a>\
                </li>\
                <li>\
                    <a href="miaosha.html">\
                        <img src="img/sidebar-4.png" alt="">\
                    </a>\
                </li>\
                <li>\
                    <a href="chaopianyi.html">\
                        <img src="img/sidebar-5.png" alt="">\
                    </a>\
                </li>\
                <li>\
                    <a href="baokuan.html">\
                        <img src="img/sidebar-6.png" alt="">\
                    </a>\
                </li>\
                <li>\
                    <a href="yushou.html">\
                        <img src="img/sidebar-7.png" alt="">\
                    </a>\
                </li>\
            </ul>\
        </div>\
        <div class="side-bar-show">\
            <img src="img/sidebar-618.png" alt="">\
            <i class="zhankai">\
                <img src="img/sidebar-zhankai.png" alt="">\
            </i>\
        </div>\
    </section>\
')


$('body').append(side);
$('.shouqi').click(function(){
    $('.side-bar').hide();
    $('.side-bar-show').show();
})

$('.side-bar-show').click(function(){
    $('.side-bar').show();
    $('.side-bar-show').hide()
})