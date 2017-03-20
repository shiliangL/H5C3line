/**
 * Created by Administrator on 2016-11-19.
 */
/**
 * 初始化
 */
function init() {
    cssJsItem();
    $('.js-content').scrollTop(0);
    slideViews($(".radios a"), $('.js-item'));
}
/**
 * 事件绑定
 */
function bindEvent() {
    /*菜单点击*/
    $(".top-menu").click(function () {
        if($(this).hasClass("cancle")){
            $(this).removeClass("cancle");
        }else{
            $(this).addClass("cancle");
            // $("#main .js-item")[0].style.width = "50%";
        }
    });
    /*根据窗口变化改变背景大小*/
    window.onresize = function (e) {
        cssJsItem();
    };
    $("#main .js-item a").bind({
        mouseover: function () {
            $(this).children().animate({
                width: '101%'
            },'easing');
        },
        mouseout: function () {
            $(this).children().animate({
                width: 0
            },'easing');
        }
    });
}
/**
 * 销毁
 */
function destroy() {

}
/**
 * 改变背景图片大小
 */
function cssJsItem() {
    //根据窗口大小设置图片背景容器大小
    $("#main .js-item").width($(window).width());
    $("#main .js-item").height($(window).height());
    //让文本始终居中
    var inner = $("#main .js-item .inner");
    inner.css({
       'margin-left': -inner.width() / 2,
       'margin-top': -inner.height() / 2
    }).show();
}


(function () {
    init();
    bindEvent();
    destroy();
})();


function slideViews(menu, views) {
    var menu = menu,
        views = views;
    var timer = null;

    addClass(getIndexByScrollTop());//根据初始色块位置确认默认菜单样式

    var hasMove = false;
    document.onmousewheel= function (e) {
        if(hasMove)return;

        hasMove = true;

        var e = e || window.Event;
        var raios_children = $('.radios a');
        var index = raios_children.index($('.radios .current'));
        e.wheelDelta <= 0 ? ++index : --index;
        raios_children.eq(index).addClass('current').siblings().removeClass('current');

        $('.js-content').animate({
            scrollTop: $(window).height() * index
        });

        setTimeout(function () {
            hasMove = false;
        },1000);
    }

    /**
     * 根据索引添加菜单的样式
     * @param index 菜单索引
     * @return {*}
     */
    function addClass(index) {

    }
    /**
     * 根据滚动位置获得菜单的索引
     * @return {*} 索引
     */
    function getIndexByScrollTop() {
        return 0;
    }
    /**
     * 根据样式获得菜单的索引
     * @param cls 样式
     * @return {*} 索引
     */
    function getIndexByClass(cls) {
        return 0;
    }

}
