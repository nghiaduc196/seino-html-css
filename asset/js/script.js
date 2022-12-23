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
        // console.log(windowsize)
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

    $(".input-checkbox:checkbox").change(function () {
        console.log('abc');
        if ($(this).is(':checked') === true) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });
    console.log('abc')

    $(".input-checkbox:radio").change(function () {
        console.log('abc');
        let child = $(this).parent().parent().siblings();
        $('.form-checkbox', child).removeClass('active');
        $(this).parent().addClass('active');
    });

    $('body').on('click', '.icon-show', function () {
        $(this).toggleClass('show');
    })
    $('body').on('click', '.text-show-collapse', function (){
        $(this).prev().toggleClass('show');
    });

    $('body').on('click', '.sub-input', function () {
        $(this).parent().parent().remove();
    })

    $('body').on('click', '.tab-scroll', function (){
        let id = $(this).attr('data-id');
        if (id == 1){
            $(window).scrollTop($('#tab1').offset().top - 160);
        }
        if (id == 2){
            $(window).scrollTop($('#tab2').offset().top - 160);
        }
        if (id == 3){
            $(window).scrollTop($('#tab3').offset().top - 160);
        }
    });

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

    $('body').on('click', '.icon-add-input-1', function () {
        $(this).parent().prev().append(`<div class="row row-cols-2 row-cols-md-2 row-cols-lg-1 mt-11">
                                                <div class="col d-flex w-calc-200 align-items-center">
                                                    <input class="text-black ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input"/>
                                                    <span class="ms-20">m</span>
                                                    <img class="ms-20 me-20" src="./asset/image/icon_x.svg"/>
                                                    <input class="text-black ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input"/>
                                                    <span class="ms-20 me-20">m</span>
                                                    <span>:</span>
                                                </div>
                                                <div class="col d-flex w-200 align-items-center mt-3 mt-lg-0">
                                                    <input type="text"
                                                           class="w-92 ps-23 text-black ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input">
                                                    <span class="ms-20 me-20">枚</span>
                                                    <img class="cursor-pointer sub-input icon-disable" src="./asset/image/icon_sub.svg"/>
                                                </div>
                                            </div>`);
    })

    $('body').on('click', '.icon-add-input-2', function () {
        $(this).parent().prev().append(`<div class="d-flex align-items-center mt-12">
                                                <select class="ps-23  ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input">
                                                    <option>1.1m x 1.1m</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                </select>
                                                <span class="ms-20 me-20">:</span>
                                                <input type="text"
                                                       class="w-92 ps-23  ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input">
                                                <span class="ms-20 me-20">枚</span>
                                                <span><img class="cursor-pointer sub-input" src="./asset/image/icon_sub.svg"/></span>
                                            </div>`);
    })

    $('body').on('click', '.submit-form', function () {
        $(this).addClass('d-none');
        $(this).parent().next().removeClass('visually-hidden');
        $('.form-control').each(function (e, value) {
            if (value.value.length > 0) {
                value.style.border = "2px solid #003B90";
                value.style.background = "#F5F5F5";
                value.style.color = "#003B90";
                value.style.fontWeight = "700";
                value.setAttribute("readonly", "");
            } else {
                value.style.border = "1px solid #DBDBDB";
                value.style.background = "#F5F5F5";
                value.setAttribute("readonly", "");
            }

        })

        $('.icon-add-input-1').each(function (e, value) {}).click(false);
        $('.icon-add-input-2').each(function (e, value) {}).click(false);
        $('.icon-add-input').each(function (e, value) {}).click(false);
        $('.sub-input').each(function (e, value) {}).click(false);

        $('.form-checkbox').each(function (e, value) {
            $('.notification').removeClass('visually-hidden')
            if ($('input', $(this))[0].checked) {
                value.style.border = "2px solid #003B90";
                value.style.background = "#F5F5F5";
                $('input', $(this))[0].setAttribute("readOnly", "");
            } else {
                value.style.border = "1px solid #DBDBDB";
                value.style.background = "#F5F5F5";
                $('input', $(this))[0].setAttribute("disabled", "");
                $('.checkmark', $(this)).css('background', '#F5F5F5');
                $('.checkmark-radio', $(this)).css('background', '#F5F5F5');
            }
        });

        $('select').each(function (e, value) {
            value.setAttribute("disabled", "");
        });

        $('.button-custom').each(function (e, value) {
            $('img', value).attr('src', './asset/image/icon_add_disabled.svg');
            $('span', value).addClass('text-gray-blur');
            $(value).css('background', '#DBDBDB');
            $(value).css('border', '1px dashed #003B90');
        });

        $('.button-disable').each(function (e, value) {
            $(value).addClass('bg-disable');
            $('div', value).addClass('bg-disable-2');
        });

        $('.icon-disable').each(function (e, value) {
            $(value).attr('src', './asset/image/icon_sub_disable.svg');
            $(value).removeClass('sub-input');
        });

        $('.form-checkbox-custom').each(function (e, value){
            $('input', $(this))[0].setAttribute("disabled", "");
            if ($('input',value)[0].checked){
                value.style.background = "#A2A2A2";
                $('.icon', value).css('background', '#5F5D5D');
            }else  {
                value.style.background = "#A2A2A2";
            }
        });
    })


    // datepicker-custom

    $('body').on('click', '.datepicker-custom', function (){
        $('#modal-backdrop').addClass('modal-backdrop');
        $(this).addClass('test123');
    })

});