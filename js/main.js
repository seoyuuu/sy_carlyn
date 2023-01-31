$(document).ready(function(){
    $('.top_close').click(function(){ //탑배너 없애기
        $('.top_banner').hide();
    });

        /***************메뉴 사이드바**************** */
        $('.header_ham').on('click', function () {
            $('.side_background').show();
            $('.side_menu').show().animate({
                right: 0
            });
        });
        $('.side_close').on('click', function () {
            $('.side_background').hide();
            $('.side_menu').animate({
                right: '-' + 35 + '%'
            }, function () {
                $('.side_menu').hide();
            });
        });

        /*************************** */
        $('.side_shop').mouseover(function(){
            $('.shop_ul').slideDown(300)
        });
        $('.shop_ul').mouseleave(function(){
            $('.shop_ul').slideUp(300)
        });

        $('.side_story').mouseover(function(){
            $('.story_ul').slideDown(300)
        });
        $('.story_ul').mouseleave(function(){
            $('.story_ul').slideUp(300)
        });

        $('.side_board').mouseover(function(){
            $('.board_ul').slideDown(300)
        });
        $('.board_ul').mouseleave(function(){
            $('.board_ul').slideUp(300)
        });
});



