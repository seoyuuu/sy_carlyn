$(document).ready(function(){ //이미지 하단 호버 변경
    $(".img_bot_black").on('mouseenter', function() {
        $('.product_img_big').attr("src", "./img/product/img_black.jpg");
    });

    $(".img_bot_main").on('mouseenter', function() {
        $('.product_img_big').attr("src", "./img/list/list_img1.jpg");
    });

    $(".img_bot_pink").on('mouseenter', function() {
        $('.product_img_big').attr("src", "./img/product/img_pink.jpg");
    });

    $(".img_bot_blue").on('mouseenter', function() {
        $('.product_img_big').attr("src", "./img/product/img_blue.jpg");
    });

    $(".img_bot_violet").on('mouseenter', function() {
        $('.product_img_big').attr("src", "./img/product/img_violet.jpg");
    });

/////////////////////탭메뉴 스티키/////////////////////////////
    let tab_top = $('.product_nav').offset().top;
        
    $(window).scroll(function(){
        let tab_s = $(window).scrollTop();
        console.log(tab_s, tab_top)

        if(tab_s >= tab_top) {
            $('.product_nav').css({
                position: 'fixed',
                left: '0',
                right: '0',
                margin: '0 auto',
                top: '100px',
                maxWidth: '1200px',
                minWidth: '320px',
                background: '#fff',
                zIndex: 15
            })
        }
        else {
            $('.product_nav').css({
                position: 'absolute',
                left: '0',
                top: 'auto',
                width: '100%',
                background: '#fff',
            })
        }
    });
});