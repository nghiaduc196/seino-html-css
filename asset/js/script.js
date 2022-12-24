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

    // $('body').on('click', '.submit-button', function (){
    //     event.preventDefault();
    // })

    $('body').on('click', '.reset-button', function (){
        let form = $(this).parent().parent().parent();
        if ($('.input-checkbox', form).is(':checked')){
            $('.input-checkbox', form).parent().removeClass('active');
        }
    })

    function ActiveCheck(){
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
    };
    ActiveCheck();

    $('body').on('click', '.icon-show', function () {
        $(this).toggleClass('show');
    })
    $('body').on('click', '.text-show-collapse', function () {
        $(this).prev().toggleClass('show');
    });

    $('body').on('click', '.sub-input', function () {
        $(this).parent().parent().remove();
    })

    $('body').on('click', '.tab-scroll', function () {
        let id = $(this).attr('data-id');
        if (id == 1) {
            $(window).scrollTop($('#tab1').offset().top - 160);
        }
        if (id == 2) {
            $(window).scrollTop($('#tab2').offset().top - 160);
        }
        if (id == 3) {
            $(window).scrollTop($('#tab3').offset().top - 160);
        }
    });

    $('body').on('click', '.icon-add-input', function () {
        $(this).parent().prev().append(`<div class="row row-cols-1 row-cols-lg-2 mt-3 gx-0">
                                            <div class="col w-calc-303">
                                                <div class="custom-select position-relative">
                                                        <select style="z-index: 1" class="border-radius-5 ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input">
                                                            <option class="text-color-gray-dark" value="0">リストから選択</option>
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
        changeSelect();
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
                value.setAttribute("disabled", "");
            } else {
                value.style.border = "1px solid #DBDBDB";
                value.style.background = "#F5F5F5";
                value.setAttribute("disabled", "");
            }

        })

        $('.icon-add-input-1').each(function (e, value) {
        }).click(false);
        $('.icon-add-input-2').each(function (e, value) {
        }).click(false);
        $('.icon-add-input').each(function (e, value) {
        }).click(false);
        $('.sub-input').each(function (e, value) {
        }).click(false);

        $('.form-checkbox').each(function (e, value) {
            $('.notification').removeClass('visually-hidden')
            if ($('input', $(this))[0].checked) {
                value.style.border = "2px solid #003B90";
                value.style.background = "#F5F5F5";
                $('input', $(this))[0].setAttribute("disabled", "");
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

        $('.form-checkbox-custom').each(function (e, value) {
            $('input', $(this))[0].setAttribute("disabled", "");
            if ($('input', value)[0].checked) {
                value.style.background = "#A2A2A2";
                $('.icon', value).css('background', '#5F5D5D');
            } else {
                value.style.background = "#A2A2A2";
            }
        });

        $('.select-selected').each(function (e, value) {
            if ($('.same-as-selected', $(value).next()).length){
                value.style.border = "2px solid #003B90";
                value.style.background = "#F5F5F5";
                value.style.color = "#003B90";
                value.style.fontWeight = "700";
            }
        });
    })


    // datepicker-custom

    $('body').on('focus', '.datepicker-custom', function () {
        $('#modal-backdrop').addClass('modal-backdrop');
        $('body').addClass('overflow-hidden');
    });

    $('body').on('click', '.modal-backdrop', function () {
        $('#modal-backdrop').removeClass('modal-backdrop');
        $('body').removeClass('overflow-hidden');
    });

    $('body').on('change', '.datepicker-custom', function () {
        $('#modal-backdrop').removeClass('modal-backdrop');
        $('body').removeClass('overflow-hidden');
        $('.modal-content').css('opacity', '1');
    });


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


    // custom select option
    function changeSelect() {
        var x, j, l, ll, selElmnt, a, b, c;
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        $('.custom-select').each(function (i, e){
            if (!$('.select-selected', e)[0]){
                selElmnt = x[i].getElementsByTagName("select")[0];
                ll = selElmnt.length;
                a = document.createElement("DIV");
                a.setAttribute("class", "select-selected");
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                x[i].appendChild(a);
                b = document.createElement("DIV");
                b.setAttribute("class", "select-items select-hide");
                for (j = 1; j < ll; j++) {
                    c = document.createElement("DIV");
                    c.innerHTML = selElmnt.options[j].innerHTML;
                    c.addEventListener("click", function (e) {
                        var y, i, k, s, h, sl, yl;
                        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                        sl = s.length;
                        h = this.parentNode.previousSibling;
                        for (i = 0; i < sl; i++) {
                            if (s.options[i].innerHTML == this.innerHTML) {
                                s.selectedIndex = i;
                                h.innerHTML = this.innerHTML;
                                y = this.parentNode.getElementsByClassName("same-as-selected");
                                yl = y.length;
                                for (k = 0; k < yl; k++) {
                                    y[k].removeAttribute("class");
                                }
                                this.setAttribute("class", "same-as-selected");
                                break;
                            }
                        }
                        h.click();
                    });
                    b.appendChild(c);
                }
                x[i].appendChild(b);
                a.addEventListener("click", function (e) {
                    e.stopPropagation();
                    closeAllSelect(this);
                    this.nextSibling.classList.toggle("select-hide");
                    this.classList.toggle("select-arrow-active");
                });
            }

        });
    }

    changeSelect();

    function closeAllSelect(elmnt) {
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    document.addEventListener("click", closeAllSelect);
});