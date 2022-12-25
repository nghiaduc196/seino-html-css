$(document).ready(function () {

    function checkTabScroll(){
        let fixed = $('.header').outerHeight() + 1;
        let tab1 = $('#tab1').offset().top;
        let tab2 = $('#tab2').offset().top;
        let tab3 = $('#tab3').offset().top;
        let tab4 = $('#tab4').offset().top;
        let tab5 = $('#tab5').offset().top;
        let tab6 = $('#tab6').offset().top;
        let tab7 = $('#tab7').offset().top;
        let tab8 = $('#tab8').offset().top;
        let scrollTop = $(window).scrollTop();

        if (scrollTop < tab2 - fixed){
            removeClassACtive(1)
        }else if (scrollTop >= tab2 - fixed && scrollTop < tab3 - fixed){
            removeClassACtive(2)
        }else if (scrollTop >= tab3 - fixed && scrollTop < tab4 - fixed){
            removeClassACtive(3)
        }else if (scrollTop >= tab4 - fixed && scrollTop < tab5 - fixed){
            removeClassACtive(4)
        }else if (scrollTop >= tab5 - fixed && scrollTop < tab6 - fixed){
            removeClassACtive(5)
        }else if (scrollTop >= tab6 - fixed && scrollTop < tab7 - fixed){
            removeClassACtive(6)
        }else if (scrollTop >= tab7 - fixed && scrollTop < tab8 - fixed){
            removeClassACtive(7)
        }else if (scrollTop >= tab8 - fixed){
            removeClassACtive(8)
        }
    }

    function removeClassACtive(param) {
        const active = ['active1', 'active2', 'active3', 'active4', 'active5', 'active6', 'active7', 'active8'];
        active.forEach( (e, i) => {
            if (i + 1 === +param){
                $('.custom-brick').addClass(e);
            }else {
                $('.custom-brick').removeClass(e);
            }
        });

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

    // autocomplete

    var availableTags = [
        "0584738888：セイノー情報サービス",
        "0584738887：セイノー情報サービス",
        "0584738886：セイノー情報サービス",
        "0584738885：セイノー情報サービス",
    ];

    $("#tags").autocomplete({
        source: availableTags,
        minLength: 6,
        focus: function (event, ui) {
            event.preventDefault();
            $("#tags").val(ui.item.label);
        },
        select: function (event, ui) {
            event.preventDefault();
            $("#tags").val(ui.item.label);
        }
    });


});