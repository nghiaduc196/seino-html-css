$(document).ready(function () {
    $('body').on('click', '#menu', function () {
        $('.wrapper').toggleClass("collapse-menu");
    });

    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        // if (windowsize <= 992) {
        //     $('.wrapper').addClass("collapse-menu");
        // }
        if (windowsize <= 1338) {
            $('.wrapper').addClass("collapse-menu");
        }
        // if (windowsize <= 1200) {
        //     $('.date').addClass("d-none");
        // } else {
        //     $('.date').addClass("d-block");
        // }
        console.log(windowsize)
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);


    // Input check box

    $(".input-checkbox:checkbox").change(function () {
        if ($(this).is(':checked') === true) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });

    $(".input-checkbox:radio").change(function () {
        let child = $(this).parent().parent().siblings();
        $('.form-checkbox', child).removeClass('active');
        $(this).parent().addClass('active');
    });

    $('body').on('click', '.icon-show', function () {
        $(this).toggleClass('show');
    })

    $('body').on('click', '.sub-input', function () {
        $(this).parent().parent().remove();
    })

    $('body').on('click', '.icon-add-input', function () {
        $(this).parent().prev().append(`<div class="row row-cols-1 row-cols-lg-2 mt-3 gx-0">
                                            <div class="col w-calc-303">
                                                <div class="position-relative">
                                                    <img class="position-absolute right-8 top-7" src="./asset/image/icon_select_arr_bottom.svg" />
                                                    <select style="z-index: 1" class="text-black ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input" >
                                                        <option>リストから選択</option>
                                                        <option>リストから選択</option>
                                                        <option>リストから選択</option>
                                                        <option>リストから選択</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col d-flex w-303 align-items-center">
                                                <input class="m-w-216 text-end text-black ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input" />
                                                <span class="ff-nt-sans fst-normal fs-16 letter-spacing-10 text-black ms-20">円</span>
                                                <img class="cursor-pointer ms-20 sub-input" src="./asset/image/icon_sub.svg" />
                                            </div>
                                        </div>`);
    })


    $('body').on('click', '.submit-form', function () {
        $(this).text('登録完了')
        $('.form-control').each(function (e, value) {
            if (value.value.length > 0) {
                value.style.border = "2px solid #003B90";
                value.style.backgroundColor = "#F5F5F5";
                value.style.color = "#003B90";
                value.style.fontWeight = "700";
                value.setAttribute("readonly", "");
            } else {
                value.style.border = "1px solid #DBDBDB";
                value.style.backgroundColor = "#F5F5F5";
                value.setAttribute("readonly", "");
            }
        })

        $('.form-checkbox').each(function (e, value) {
            $('.notification').removeClass('visually-hidden')
            if ($('input', $(this))[0].checked) {
                value.style.border = "2px solid #003B90";
                value.style.backgroundColor = "#F5F5F5";
                $('input', $(this))[0].setAttribute("readOnly", "");
            } else {
                value.style.border = "1px solid #DBDBDB";
                value.style.backgroundColor = "#F5F5F5";
                $('input', $(this))[0].setAttribute("disabled", "");
                $('.checkmark', $(this)).css('background', '#F5F5F5');
                $('.checkmark-radio', $(this)).css('background', '#F5F5F5');
            }
        })
    })


});