$(document).ready(function () {

    function checkTabScroll(){
        if ($(window).scrollTop() < $('#tab2').offset().top - 170){
            $('.custom-brick').addClass('active1');
            $('.custom-brick').removeClass('active2');
            $('.custom-brick').removeClass('active3');

        }
        if ($(window).scrollTop() > $('#tab2').offset().top - 170 && $(window).scrollTop() < $('#tab3').offset().top - 170){
            $('.custom-brick').addClass('active2');
            $('.custom-brick').removeClass('active1');
            $('.custom-brick').removeClass('active3');
        }
        if ($(window).scrollTop() >= $('#tab3').offset().top - 170){
            $('.custom-brick').addClass('active3');
            $('.custom-brick').removeClass('active1');
            $('.custom-brick').removeClass('active2');
        }
    }

    checkTabScroll();

    $( window ).scroll(function() {
        checkTabScroll();
    });
    // Input check box

});