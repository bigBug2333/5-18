/**
 * Created by I on 2018/5/14 0014.
 */
(function (window) {
    //主轮播图
    $('#index li').mouseenter(function () {
        var idx = $(this).index();
        $('.bigImg li').eq(idx).css('display', 'block').siblings().css('display', 'none');
    })

    //左栏二维码区域
    $('#asis a').click(function () {
        $('#erweima div img').attr('src', 'images/wuxia-app-for-android.png');
    })
    $('#weChat a').click(function () {
        $('#erweima div img').attr('src', 'images/wuxia-ewm.png');

    })
    //心悦服务
    $('.slide_b .assistant li').mouseenter(function () {
        $(this).css('opacity',1).siblings().css('opacity',.4);
    })

    $('#slide_left>ul>li').mouseenter(function () {
        $(this).css('backgroundColor',"#cfae69").siblings().css('backgroundColor','#343434');
    })
    $('#slide_left>ul').mouseleave(function () {
        $(this).children().css('backgroundColor','#343434');
    })
})(window);