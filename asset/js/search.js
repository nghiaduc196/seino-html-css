// (function (factory) {
//     "use strict";
//
//     if (typeof define === "function" && define.amd) {
//
//         // AMD. Register as an anonymous module.
//         define(["../widgets/datepicker"], factory);
//     } else {
//
//         // Browser globals
//         factory(jQuery.datepicker);
//     }
// })(function (datepicker) {
//     "use strict";
//
//     datepicker.regional.ja = {
//         closeText: "閉じる",
//         prevText: "前",
//         nextText: "次",
//         currentText: "今日",
//         monthNames: ["1月", "2月", "3月", "4月", "5月", "6月",
//             "7月", "8月", "9月", "10月", "11月", "12月"],
//         monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月",
//             "7月", "8月", "9月", "10月", "11月", "12月"],
//         dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
//         dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
//         dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
//         weekHeader: "週",
//         dateFormat: "yy/mm/dd",
//         firstDay: 0,
//         isRTL: false,
//         showMonthAfterYear: true,
//         yearSuffix: "年"
//     };
//     datepicker.setDefaults(datepicker.regional.ja);
//
//     return datepicker.regional.ja;
//
// });
$(document).ready(function () {
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

    $('#search-form').on('reset', function (e){
        $('#form-modal-1').trigger('reset');
        $('#form-modal-2').trigger('reset');
        $('#form-modal-3').trigger('reset');
        $('#form-modal-4').trigger('reset');
        $('#form-modal-5').trigger('reset');
        $("input[type='hidden']", $(this)).val('');
    });

    $('#search-form [name=field-1], #search-form [name=field-2], #search-form [name=field-3], #search-form [name=field-4], #search-form [name=field-5]').keydown(function(event) {
        event.preventDefault();
    });

    $('#search-form [name=field-1], #search-form [name=field-2], #search-form [name=field-3], #search-form [name=field-4], #search-form [name=field-5]').focus(function(event) {
        $(this).blur()
    });


    $('#form-modal-1').submit(function (e) {
        e.preventDefault();
        $('#modal-1').modal('hide');
        $('#search-form [name=field-1]').val($('[name=field-1-modal-1]', $(this)).val());
    });
    $('#form-modal-2').submit(function (e) {
        e.preventDefault();
        $('#modal-2').modal('hide');
        $('#search-form [name=field-2]').val($('[name=field-1-modal-2]', $(this)).val());
    });
    $('#form-modal-3').submit(function (e) {
        e.preventDefault();
        $('#modal-3').modal('hide');
        const text = ($('[name=field-1-modal-3]', $(this)).val() || '') + '; ' + ($('[name=field-2-modal-3]:checked').val() || '');
        $('#field-3-1').val($('[name=field-1-modal-3]', $(this)).val());
        $('#field-3-2').val($('[name=field-2-modal-3]:checked').val());
        $('#search-form [name=field-3]').val(text);
    });
    $('#form-modal-4').submit(function (e) {
        e.preventDefault();
        $('#modal-4').modal('hide');
        const text = ($('[name=field-1-modal-3]', $(this)).val() || '') + '; ' +
            ($('[name=field-2-modal-4]', $(this)).val() || '') + '; ' +
            ($('[name=field-3-modal-4]', $(this)).val() || '') + '; ' +
            ($('[name=field-4-modal-4]', $(this)).val() || '') + '; ' +
            ($('[name=field-5-modal-4]', $(this)).val() || '') + '; ' +
            ($('[name=field-6-modal-4]:checked').val() || '') + '; ' +
            ($('[name=field-7-modal-4]:checked').val() || '');
        $('#field-4-1').val($('[name=field-1-modal-4]', $(this)).val());
        $('#field-4-2').val($('[name=field-2-modal-4]', $(this)).val());
        $('#field-4-3').val($('[name=field-3-modal-4]', $(this)).val());
        $('#field-4-4').val($('[name=field-4-modal-4]', $(this)).val());
        $('#field-4-5').val($('[name=field-5-modal-4]', $(this)).val());
        $('#field-4-6').val($('[name=field-6-modal-4]:checked').val());
        $('#field-4-7').val($('[name=field-7-modal-4]:checked').val());
        $('#search-form [name=field-4]').val(text);
    });
    $('#form-modal-5').submit(function (e) {
        e.preventDefault();
        $('#modal-5').modal('hide');
        $('#search-form [name=field-5]').val($('[name=field-1-modal-5]', $(this)).val());
    });

    $('#modal-1').on('shown.bs.modal', function () {
        $('[name=field-1-modal-1]', $(this)).val($('#search-form [name=field-1]').val());
        $('#form-modal-1 [name=field-1-modal-1]').focus();
    });
    $('#modal-2').on('shown.bs.modal', function () {
        $('[name=field-1-modal-2]', $(this)).val($('#search-form [name=field-2]').val());
        $('#form-modal-2 [name=field-1-modal-2]').focus();
    });
    $('#modal-3').on('shown.bs.modal', function () {
        $('[name=field-1-modal-3]', $(this)).val($('#field-3-1').val());
        if($('#field-3-2').val()){
            $('[name=field-2-modal-3][value=' + $('#field-3-2').val() + ']', $(this)).prop("checked", true);
        }
        $('#form-modal-3 [name=field-1-modal-3  ]').focus();
    });
    $('#modal-4').on('shown.bs.modal', function () {
        $('[name=field-1-modal-4]', $(this)).val($('#field-4-1').val());
        $('[name=field-2-modal-4]', $(this)).val($('#field-4-2').val());
        $('[name=field-3-modal-4]', $(this)).val($('#field-4-3').val());
        $('[name=field-4-modal-4]', $(this)).val($('#field-4-4').val());
        $('[name=field-5-modal-4]', $(this)).val($('#field-4-5').val());
        if($('#field-4-6').val()){
            $('[name=field-6-modal-4][value=' + $('#field-4-6').val() + ']', $(this)).prop("checked", true);
        }
        if($('#field-4-7').val()){
            $('[name=field-7-modal-4][value=' + $('#field-4-7').val() + ']', $(this)).prop("checked", true);
        }
    });
    $('#modal-5').on('shown.bs.modal', function () {
        $('[name=field-1-modal-5]', $(this)).val($('#search-form [name=field-5]').val());
        $('#form-modal-5 [name=field-1-modal-5]').focus();
    });
});


