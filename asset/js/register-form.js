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


    $(".datepicker-custom").datepicker({
        closeText: "閉じる",
        prevText: "前",
        nextText: "次",
        currentText: "今日",
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月",
            "7月", "8月", "9月", "10月", "11月", "12月"],
        monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月",
            "7月", "8月", "9月", "10月", "11月", "12月"],
        dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
        dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
        dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
        weekHeader: "週",
        dateFormat: "yy/mm/dd",
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: "年",
    });

});