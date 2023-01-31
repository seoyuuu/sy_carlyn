$(document).ready(function(){

        /***************메뉴 사이드바**************** */
        $('.list_header_ham').on('click', function () {
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

});

