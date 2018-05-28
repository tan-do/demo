

//chrome.extension.getBackgroundPage()._util.notice();



var vm = new Vue({
    el: '#app',
    data: {
        message: '弹出桌面通知'
    },

    methods:{
        layer:function(){
            alert('vue')
        },

        notice: function () {
            // 先检查浏览器是否支持
            if (!("Notification" in window)) {
                alert("This browser does not support desktop notification");
            }

            // 检查用户是否同意接受通知
            else if (Notification.permission === "granted") {
                // If it's okay let's create a notification
                var notification = new Notification("弹出桌面通知", {
                    icon: "../img/icon/icon_48.png",
                    body: "这是一个桌面通知"
                });
            }

            // 否则我们需要向用户获取权限
            else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    // 如果用户同意，就可以向他们发送通知
                    if (permission === "granted") {
                        var notification = new Notification("Hi there!");
                    }
                });
            }

        }        
    }

});

var popup={

    init(){
        this.test();
    },

    test:function(){

        $('#test').on('click', function () {
            $.ajax({
                type: "GET",
                url: "http://localhost:3000/posts?_page=1&_limit=2",
                dataType: "json",
                beforeSend: function () {
                    $('#test').attr({ disabled: "disabled" })
                }
            }).done(function (res) {
                var html = '';
                for (var i = 0; i < res.length; i++) {
                    html += '<li>' + res[i].id + res[i].title + '</li>'
                    console.log(res[i].id + res[i].title)
                }

                localStorage.firstName = "Query";
                $('.loading').html(html);

            }).fail(function () {
                alert('error')
            }).always(function () {
                $('.loading img').show();
                $('#test').removeAttr("disabled")
            })
        })
        

    }

}

$(function(){
    popup.init();
})





