/**
 * Created by 布布 on 2016/11/21 0021.
 */

window.onload = function() {
    // 轮播图
    //     function sider() {
    //         var $ = function (id) {
    //             return document.getElementById(id);
    //         }
    //         var showBox = $('showBox');  //最大盒子
    //         var showPic = showBox.children[0]; // 播放盒子 存放图片的 ul
    //         var piclist = showPic.children;  //   存放图片的 li
    //         var btns = showBox.children[1];//底部按键盒子
    //         var arrts = showBox.children[2];
    // //按钮
    //         var pre = $('pre');
    //         var next = $('next');
    //         var pic = 0;
    //
    //
    // //自动播放
    //         var timmer = null;
    //         var showTime = 4000; //播放时间  可调
    // //遍历图片列表生成按钮个数；
    //         for (var i = 0; i < piclist.length; i++) {
    //             var c_span = document.createElement('div');
    //             btns.appendChild(c_span);
    //             piclist[i].style.backgroundColor = "#" + parseInt(Math.random() * 13) +
    //                 parseInt(Math.random() * 15) + parseInt(Math.random() * 13);
    //             piclist[i].innerHTML = i + 1;
    //         }
    //
    // //移入 、点击按键高亮  切换运动到对应位置；
    //         var c_span = btns.children; //底部按键
    //         c_span[0].className = "on";
    //         for (var i = 0; i < c_span.length; i++) {
    //             c_span[i].index = i;
    //             c_span[i].onclick = function () {
    //                 //小小bug 当我们点击 假的第一张的时候回 跳回真的第一张解决如下
    //                 if (pic == c_span.length - 1) {
    //                     showPic.style.left = 0 + "px";
    //                     pic = 0;
    //                 }
    //
    //                 for (var j = 0; j < c_span.length; j++) {
    //                     c_span[j].className = "";
    //                 }
    //                 this.className = "on";
    //                 //移动到指定位置
    //                 var target = -this.index * showBox.offsetWidth;
    //                 go(showPic, target);
    //                 pic = this.index;
    //             }
    //         }
    //
    // // -----克隆一张------
    //         var kklast = showPic.children[0].cloneNode(true); //克隆第一张图片放到ul 最后
    //         showPic.appendChild(kklast); //
    // //点击切换 +  无缝滚动效果
    // //pppppppppppppppppppppppppppp
    //         next.onclick = function () {
    //             //如果点击的时候pic == length - 1 那么执行抽回
    //             if (pic == piclist.length - 1) {
    //                 showPic.style.left = 0 + "px";
    //                 pic = 0;
    //             }
    //             //正常切换代码如下
    //             pic++;
    //             var moveways = -pic * showBox.offsetWidth;
    //             go(showPic, moveways);
    //
    //             //按键跟随
    //             for (var i = 0; i < c_span.length; i++) {
    //                 for (var i = 0; i < c_span.length; i++) {
    //                     c_span[i].className = "";
    //                 }
    //                 if (pic == piclist.length - 1) { // 关键点  ------------------------------
    //                     //如果跳到最后让他回到 一张显示
    //                     c_span[0].className = "on";
    //                 } else {
    //                     c_span[pic].className = "on";
    //                 }
    //             }
    //
    //         }
    //         pre.onclick = function () {
    //             if (pic == 0) {
    //                 showPic.style.left = -(showPic.offsetWidth - showBox.offsetWidth) + "px";
    //                 pic = piclist.length - 1;
    //             }
    //             pic--;
    //             var moveways = -pic * showBox.offsetWidth;
    //             go(showPic, moveways);
    //             //按键跟随
    //             for (var i = 0; i < c_span.length; i++) {
    //                 for (var i = 0; i < c_span.length; i++) {
    //                     c_span[i].className = "";
    //                 }
    //                 c_span[pic].className = "on";
    //             }
    //         }
    //         function autoPlay() {
    //             timmer = setInterval(function () {
    //                 next.click();//触发执行；
    //             }, showTime)
    //         }
    //
    //         autoPlay();
    //         showBox.onmouseover = function () {
    //             arrts.style.display = "block";
    //             clearInterval(timmer);
    //         }
    //         showBox.onmouseout = function () {
    //             arrts.style.display = "none";
    //             autoPlay();
    //         }
    // //封装变速左右运动
    //         function go(box, target) {
    //             clearInterval(box.time); //记得每次进入清除定时器
    //             box.time = setInterval(function () {
    //                 var leader = box.offsetLeft;
    //                 var step = (target - leader) / 10;
    //                 step = step > 0 ? Math.ceil(step) : Math.floor(step); //关键判断取值
    //                 leader = leader + step;
    //                 box.style.left = leader + "px";
    //                 if (leader == target) {
    //                     clearInterval(box.time);
    //                 }
    //             }, 20)
    //         }
    //     }
    //     sider();

    // 图片展示效果
    function shoupic() {
        var showGroup = document.getElementById("showGroup");
        var lis = showGroup.children;
        var cloud = document.getElementById("cloud");

        for (var i = 0; i < lis.length; i++) {
            lis[i].onmouseover = function() {
                go(cloud, {
                    "left": this.offsetLeft,
                    "top": this.offsetTop,
                })
            }
        }

        function go(box, obj) { //修改上下左右 属性
            clearInterval(box.time);
            box.time = setInterval(function() {
                var flag = true;
                for (var k in obj) {
                    if (k == "opacity") {
                        var leader = obj[k] * 100;
                        var target = obj[k];
                        var step = (target - leader) / 20;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step); //关键判断取值
                        leader = leader + step;
                        box.style[k] = leader / 100;

                    } else if (k == "zindex") {
                        box.style.zIndex = obj[k];
                    } else {
                        var leader = parseInt(getStyle(box, k)) || 0;
                        var target = obj[k];
                        var step = (target - leader) / 10;
                        step = step > 0 ? Math.ceil(step) : Math.floor(step); //关键判断取值
                        leader = leader + step;
                        box.style[k] = leader + "px";
                        if (leader != target) {
                            flag = false;
                        }

                    }
                    if (flag) {
                        clearInterval(box.time);
                    }
                }

            }, 10);
        }

        function getStyle(tag, attr) {
            return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
        } //上下结合
    }
    shoupic();

    //顶部背景轮播
    // $("#bgSlider").style.backgroundImage = 'url("../images/vv2.jpg")';
    function bgShow() {
        var index = 1;
        var sstime = 6000;
        var bgSlider = document.getElementById('bgSlider');
        var timer = null;
        timer = setInterval(function() {
            if (index == 5) {
                index = 1;
            }
            index++;
            bgSlider.style.backgroundImage = 'url("../images/vv' + index + '.png")';
        }, sstime)
    }
    // bgShow();
    function tt() {
        $("#tutuTab >ul >li").mouseenter(function() {
            $(this).addClass('ontabli').siblings().removeClass('ontabli');
            $(".tab_content > div").eq($(this).index()).show().siblings().hide();
        })
    }
    tt();
    // 小小轮播图

    //  让li 可以移入  可以点击
    $(".show_bnt li").on('click', $(".mc_show"), function() {
        $("#lubF >div").eq($(this).index()).stop().show(450).siblings().stop().hide(300);

    });

    //游戏下载区域往下 -------------------------

    $(".show .hero_dc:even").css({
        " left": "50px"
    }); //定位英雄

    //点击显示视频
    $(".mask_in").click(function() {
        $(this).parent().slideUp();
    });

    //移入英雄高亮
    $(".itemShow").mouseenter(function() {
        $(this).children('.mask').hide();
    });
    $(".itemShow").mouseleave(function() {
        $(this).children('.mask').show();
    });


    // 视频展示区域
    $(function() {

        //box1
        $(".lest .box1").mouseover(function(event) {
            $(".box1").stop(true, true).animate({ width: "500px", height: "471px" }, 200);
            $(".box2").stop(true, true).animate({ width: "335px", height: "228px", left: "515px", top: "0px" }, 200);
            $(".box3").stop(true, true).animate({ width: "335px", height: "228px", left: "865px", top: "0px" }, 200);
            $(".box4").stop(true, true).animate({ width: "218px", height: "228px", left: "515px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "218px", height: "228px", left: "748px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "218px", height: "228px", left: "981px", top: "243px" }, 200);
            event.stopPropagation(); //  阻止事件冒泡
        })
        $(".box1").mouseout(function(event) {
            $(".box1").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
            $(".box2").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "0px" }, 200);
            $(".box3").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "0px" }, 200);
            $(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
        })

        //box2
        $(".box2").mouseover(function(event) {
            $(".box1").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
            $(".box2").stop(true, true).animate({ width: "500px", height: "471px" }, 200);
            $(".box3").stop(true, true).animate({ width: "280px", height: "228px", left: "920px", top: "0px" }, 200);
            $(".box4").stop(true, true).animate({ width: "187px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "188px", height: "228px", left: "203px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "280px", height: "228px", left: "920px", top: "243px" }, 200);
            event.stopPropagation(); //  阻止事件冒泡

        })
        $(".box2").mouseout(function(event) {
            $(".box1").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
            $(".box2").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "0px" }, 200);
            $(".box3").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "0px" }, 200);
            $(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
        })


        //box3
        $(".box3").mouseover(function(event) {
            $(".box3").stop(true, true).animate({ width: "500px", height: "471px", left: "700", top: "0px" }, 300);
            $(".box1").stop(true, true).animate({ width: "335px", height: "228px", left: "0px", top: "0px" }, 200);
            $(".box2").stop(true, true).animate({ width: "335px", height: "228px", left: "350px", top: "0px" }, 200);
            $(".box4").stop(true, true).animate({ width: "218px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "218px", height: "228px", left: "233px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "218px", height: "228px", left: "466px", top: "243px" }, 200);
            event.stopPropagation(); //  阻止事件冒泡

        })
        $(".box3").mouseout(function(event) {
            $(".box1").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "0px" }, 200);
            $(".box2").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "0px" }, 200);
            $(".box3").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "0px" }, 200);
            $(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
        })




        //box4
        $(".lest .box4").mouseover(function(event) {
            $(".box4").stop(true, true).animate({ width: "500px", height: "471px" }, 200);
            $(".box5").stop(true, true).animate({ width: "335px", height: "228px", left: "515px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "335px", height: "228px", left: "865px", top: "243px" }, 200);
            $(".box7").stop(true, true).animate({ width: "218px", height: "228px", left: "515px", top: "486px" }, 200);
            $(".box8").stop(true, true).animate({ width: "218px", height: "228px", left: "748px", top: "486px" }, 200);
            $(".box9").stop(true, true).animate({ width: "218px", height: "228px", left: "981px", top: "486px" }, 200);
            event.stopPropagation(); //  阻止事件冒泡
        })
        $(".box4").mouseout(function(event) {
            $(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
            $(".box7").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "486px" }, 200);
            $(".box8").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "486px" }, 200);
            $(".box9").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "486px" }, 200);
        })


        //box5
        $(".box5").mouseover(function(event) {
            $(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "500px", height: "471px" }, 200);
            $(".box6").stop(true, true).animate({ width: "280px", height: "228px", left: "920px", top: "243px" }, 200);
            $(".box7").stop(true, true).animate({ width: "187px", height: "228px", left: "0px", top: "486px" }, 200);
            $(".box8").stop(true, true).animate({ width: "188px", height: "228px", left: "203px", top: "486px" }, 200);
            $(".box9").stop(true, true).animate({ width: "280px", height: "228px", left: "920px", top: "486px" }, 200);
            event.stopPropagation(); //  阻止事件冒泡


        })
        $(".box5").mouseout(function(event) {
            $(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
            $(".box7").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "486px" }, 200);
            $(".box8").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "486px" }, 200);
            $(".box9").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "486px" }, 200);
        })

        //box6
        $(".box6").mouseover(function(event) {
            $(".box6").stop(true, true).animate({ width: "500px", height: "471px", left: "700", top: "243px" }, 200);
            $(".box4").stop(true, true).animate({ width: "335px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "335px", height: "228px", left: "350px", top: "243px" }, 200);
            $(".box7").stop(true, true).animate({ width: "218px", height: "228px", left: "0px", top: "486px" }, 200);
            $(".box8").stop(true, true).animate({ width: "218px", height: "228px", left: "233px", top: "486px" }, 200);
            $(".box9").stop(true, true).animate({ width: "218px", height: "228px", left: "466px", top: "486px" }, 200);
            event.stopPropagation(); //  阻止事件冒泡


        })
        $(".box6").mouseout(function(event) {
            $(".box4").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "243px" }, 200);
            $(".box5").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "243px" }, 200);
            $(".box6").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "243px" }, 200);
            $(".box7").stop(true, true).animate({ width: "390px", height: "228px", left: "0px", top: "486px" }, 200);
            $(".box8").stop(true, true).animate({ width: "390px", height: "228px", left: "405px", top: "486px" }, 200);
            $(".box9").stop(true, true).animate({ width: "390px", height: "228px", left: "810px", top: "486px" }, 200);
        })

    })


    $(window).scroll(function() {
        if ($(document).scrollTop() > 500) {
            $("#backTop").show();
        } else {
            $("#backTop").hide();
        }

    });


    // 在线会员 最近访客
    function onlinex() {
        var datas = [
            { "name": "tdxy01", "icon": "./images/aa01.jpg" },
            { "name": "沉眠楚人", "icon": "./images/aa02.jpg" },
            { "name": "爱上karina", "icon": "./images/aa03.jpg" },
            { "name": "tdxy01", "icon": "./images/aa04.jpg" },
            { "name": "today", "icon": "./images/aa05.jpg" },
            { "name": "hlg", "icon": "./images/aa06.jpg" },
            { "name": "itcast", "icon": "./images/aa07.jpg" },
            { "name": "heima", "icon": "./images/aa08.jpg" },
            { "name": "huima", "icon": "./images/aa09.jpg" },
            { "name": "gege", "icon": "./images/aa01.jpg" },
        ];

        var users = document.getElementById('users');
        var str = "";
        for (var i = 0; i < datas.length; i++) {
            str +=
                '<li><img src="' +
                datas[i].icon +
                '" alt=""><div class="v_name">' +
                datas[i].name +
                '</div></li>'
        }
        users.innerHTML = str;
    }
    onlinex();


    // //评论区功能
    // function ppll() {
    //     //评论区
    //     var text = document.getElementById('text');
    //     //console.log(text.value);
    //     var fasong = document.getElementById('fasong');
    //     var u_enter = document.getElementById('u_enter');
    //     var ddzz = document.getElementById('ddzz');
    //     var sscc = document.getElementById('sscc');
    //     var pl_ul = document.getElementById('pl_ul');
    //     var pl_num = document.getElementById('pl_num');
    //     var i = 0;
    //     fasong.onclick = function() {
    //         //时间
    //         var date = new Date();
    //         var year = date.getFullYear();
    //         var month = date.getMonth() + 1;
    //         var day = date.getDate();
    //         var hour = date.getHours();
    //         var minute = date.getMinutes();
    //         var second = date.getSeconds();
    //         var timeNow = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second;

    //         if (text.value == "") {
    //             alert("请输入内容");
    //         } else {
    //             var c_li = document.createElement('li');
    //             c_li.innerHTML = '<div class="li_box clearfix"><div class="li_pic"><img src="' +
    //                 './images/ttuser.gif' +
    //                 '" alt=""></div><div class="li_content"> <div class="clearfix"><span class="fl">' +
    //                 '用户 ' +
    //                 '[广东省珠深圳市]' +
    //                 ' </span> <span class="fr">' +
    //                 timeNow +
    //                 '</span> </div> <div class="u_enter" id="u_enter">' +
    //                 text.value +
    //                 '</div> <div class="fr"><a href="javascript:;" id="ddzz">' +
    //                 '点赞' +
    //                 '</a> <a href="javascript:;" id="sscc">' +
    //                 '删除' +
    //                 '</a></div></div> </div>';


    //             var lis = pl_ul.children;
    //             if (lis.length == 0) {
    //                 pl_ul.appendChild(c_li);
    //             } else {
    //                 pl_ul.insertBefore(c_li, lis[0]);
    //             }
    //         }
    //         //删除 sscc

    //         pl_num.innerHTML = lis.length + "条评论";
    //     }
    //     ddzz.onclick = function() {
    //         i++;
    //         if (i > 10) {
    //             alert("狂点不累啊~ ==死机给你看 ")
    //         }
    //         this.innerHTML = "点赞(" + "+" + i + ")";
    //     }
    // }
    // ppll();


    //返回顶部
    $("#backTop").click(function() {
        var speed = 200; //滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
}
