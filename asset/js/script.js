$(document).ready(function () {
    const time = 2;
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

    $('body').on('click', '.reset-button', function () {
        let form = $(this).parent().parent().parent();
        if ($('.input-checkbox', form).is(':checked')) {
            $('.input-checkbox', form).parent().removeClass('active');
        }
    })

    function ActiveCheck() {
        $(".input-checkbox:checkbox").change(function () {
            if ($(this).is(':checked') === true) {
                $(this).parent().addClass('active');
            } else {
                $(this).parent().removeClass('active');
            }
        });

        $(".input-checkbox:radio").change(function () {
            const name = $(this).prop('name');
            $('input[type=radio][name="'+name+'"]').each(function(){
                $(this).closest('.active').removeClass('active');
            })
            //
            // let child = $(this).parent().parent().siblings();
            // $('.form-checkbox', child).removeClass('active');
            $(this).parent().addClass('active');
        });

        $(".input-checkbox:radio").each(function(){
            const currentValue = $(this).is(':checked')
            $(this).data('currentValue', currentValue);

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
        let fixed = $('.header').outerHeight();
        let tab1 = $('#tab1').offset().top;
        let tab2 = $('#tab2').offset().top;
        let tab3 = $('#tab3').offset().top;
        let tab4 = $('#tab4').offset().top;
        let tab5 = $('#tab5').offset().top;
        let tab6 = $('#tab6').offset().top;
        let tab7 = $('#tab7').offset().top;
        let tab8 = $('#tab8').offset().top;

        if (id == 1) {
            $(window).scrollTop(tab1 - fixed);
        }
        if (id == 2) {
            $(window).scrollTop(tab2 - fixed);
        }
        if (id == 3) {
            $(window).scrollTop(tab3 - fixed);
        }
        if (id == 4) {
            $(window).scrollTop(tab4 - fixed);
        }
        if (id == 5) {
            $(window).scrollTop(tab5 - fixed);
        }
        if (id == 6) {
            $(window).scrollTop(tab6 - fixed);
        }
        if (id == 7) {
            $(window).scrollTop(tab7 - fixed);
        }
        if (id == 8) {
            $(window).scrollTop(tab8 - fixed);
        }

    });


    $('body').on('click', '.icon-add-input', function () {
        $(this).parent().prev().append(`<div class="row row-cols-1 row-cols-lg-2 mt-3 gx-0">
                                            <div class="col w-calc-303">
                                                <div class="custom-select position-relative">
                                                        <select style="z-index: 1" class="border-radius-5 ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input">
                                                            <option class="text-color-gray-dark" value="0">?????????????????????</option>
                                                            <option>?????????????????????</option>
                                                            <option>?????????????????????</option>
                                                            <option>?????????????????????</option>
                                                            <option>?????????????????????</option>
                                                        </select>
                                                </div>
                                            </div>
                                            <div class="col d-flex w-303 align-items-center">
                                                <input class="m-w-216 text-end text-black ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input" />
                                                <span class="ff-nt-sans fst-normal fs-16 letter-spacing-10 text-black ms-20">???</span>
                                                <img class="cursor-pointer ms-20 sub-input" src="./asset/image/icon_sub.svg" />
                                            </div>
                                        </div>`);
        changeSelect();
    })

    $('body').on('click', '.icon-add-input-1', function () {
        $(this).parent().prev().append(`<div class="row row-cols-2 row-cols-md-2 row-cols-lg-1 mt-11">
                                                <div class="col d-flex w-calc-200 align-items-center">
                                                    <input class="text-black ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input" placeholder="??????1.3"/>
                                                    <span class="ms-20">m</span>
                                                    <img class="ms-20 me-20" src="./asset/image/icon_x.svg"/>
                                                    <input class="text-black ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input" placeholder="??????1.3"/>
                                                    <span class="ms-20 me-20">m</span>
                                                    <span>:</span>
                                                </div>
                                                <div class="col d-flex w-200 align-items-center mt-3 mt-lg-0">
                                                    <input type="text"
                                                           class="w-92 ps-23 text-black ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input">
                                                    <span class="ms-20 me-20">???</span>
                                                    <img class="cursor-pointer sub-input icon-disable" src="./asset/image/icon_sub.svg"/>
                                                </div>
                                            </div>`);
    })

    $('body').on('click', '.icon-add-input-2', function () {
        $(this).parent().prev().append(`<div class="d-flex align-items-center mt-12">
                                                    <div class="custom-select w-100 position-relative">
                                                        <select style="z-index: 1" class="border-radius-5 form-control ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input">
                                                            <option class="text-color-gray-dark" value="0">1.1m x 1.1m</option>
                                                            <option>1.1m x 1.2m</option>
                                                            <option>1.1m x 1.3m</option>
                                                            <option>1.1m x 1.4m</option>
                                                            <option>1.1m x 1.5m</option>
                                                        </select>
                                                    </div>

                                                    <span class="ms-20 me-20">:</span>
                                                    <input type="text"
                                                           class="w-92 ps-23  ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input">
                                                    <span class="ms-20 me-20">???</span>
                                                    <span><img class="cursor-pointer sub-input" src="./asset/image/icon_sub.svg"/></span>
                                                </div>`);
        changeSelect();
    })


    $('body').on('click', '.button-back', function (e) {
        $('.loading').removeClass('visually-hidden');
        $('body').addClass('overflow-hidden');
        let i = 0;
        e.preventDefault();
        setInterval(() => {
            if (i === 1) {
                clearInterval(interval);
            }
            i++;
            $('.loading').addClass('visually-hidden');
            $('body').removeClass('overflow-hidden');
            window.location.href = 'register-form.html';
        }, time * 1000);

        return () => clearInterval(interval);

    });

    $('body').on('click', '.submit-form-done', function (e) {
        $('.loading').removeClass('visually-hidden');
        $('body').addClass('overflow-hidden');
        e.preventDefault();
        let i = 0;
        setInterval(() => {
            if (i === 1) {
                clearInterval(interval);
            }
            i++;
            $('.loading').addClass('visually-hidden');
            $('body').removeClass('overflow-hidden');
            window.location.href = 'register-done.html';
        }, time * 1000);
    });

    $('body').on('click', '.button-back-register', function (e) {
        $('.loading').removeClass('visually-hidden');
        $('body').addClass('overflow-hidden');
        e.preventDefault();
        let i = 0;
        setInterval(() => {
            if (i === 1) {
                clearInterval(interval);
            }
            i++;
            $('.loading').addClass('visually-hidden');
            $('body').removeClass('overflow-hidden');
            window.location.href = 'register-form.html';
        }, time * 1000);
    });


    $('body').on('click', '.submit-form', function () {
        $('.loading').removeClass('visually-hidden');
        let interval = setInterval(() => {
            $('.loading').addClass('visually-hidden');
            $(this).text('????????????');
            $(this).removeClass('submit-form');
            $(this).addClass('submit-form-done');
            $('.form-control').each(function (e, value) {
                if (value.value.length > 0) {
                    value.style.border = "4px solid #003B90";
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
                    value.style.border = "4px solid #003B90";
                    value.style.background = "#F5F5F5";
                    $('input', $(this))[0].setAttribute("disabled", "");
                    $('.checkmark', $(this)).css('top', '9px');
                    $('.checkmark-radio', $(this)).css('top', '9px')
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
                if ($('.same-as-selected', $(value).next()).length) {
                    value.style.border = "4px solid #003B90";
                    value.style.background = "#F5F5F5";
                    value.style.color = "#003B90";
                    value.style.fontWeight = "700";
                }
            });

        }, time * 1000);

        return () => clearInterval(interval);
    })


    // datepicker-custom

    $('body').on('focus', '.datepicker-custom', function () {
        if($('.modal-backdrop.show').length == 0){
            $('#modal-backdrop').addClass('modal-backdrop');
        }
    });

    $('body').on('click', '.modal-backdrop', function () {
        $('#modal-backdrop').removeClass('modal-backdrop');
    });

    $('body').on('click', '.modal', function () {
        $('#modal-backdrop').removeClass('modal-backdrop');
    });

    $('body').on('change', '.datepicker-custom', function () {
        $('#modal-backdrop').removeClass('modal-backdrop');
        $('.modal-content').css('opacity', '1');
    });

    // custom autocomplate option
    var availableTags = [
        "0584738888?????????????????????????????????",
        "0584738887?????????????????????????????????",
        "0584738886?????????????????????????????????",
        "0584738885?????????????????????????????????",
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
        $('.custom-select').each(function (i, e) {
            if (!$('.select-selected', e)[0]) {
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

    $('.table-project td').each((idx, ele) => {
        $(ele).css('width', $(ele).outerWidth());
        $('.text-truncate', $(ele)).css('width', $(ele).outerWidth() - 40)
    });

    $('.text-truncate-toggle').click(function(){
        $(this).toggleClass('text-truncate')
    })

    $('body').on('click', '.button-fade', function (e) {
        $('.loading').removeClass('visually-hidden');
        $('body').addClass('overflow-hidden');
        $('.modal').addClass('d-none');
        $('.modal-backdrop').addClass('d-none');
        e.preventDefault();
        let i = 0;
        let interval = setInterval(() => {
            i++;
            if (i === 1) {
                clearInterval(interval)
            }
            console.log(i)
            $('.modal').removeClass('d-none');
            $('.modal-backdrop').removeClass('d-none');
            $('.loading').addClass('visually-hidden');
            $('body').removeClass('overflow-hidden');
        }, time * 1000);
    });

    function hankaku2Zenkaku(str) {
        return str.replace(/[A-Za-z0-9]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
        });
    }

    $('body').on('blur', '.focus-zenkaku', function (index, ele) {
        let value = $(this).val();
        $(this).val(hankaku2Zenkaku(value));
    });

    $('body').on('blur', '.focus-uppercase', function (index, ele) {
        let value = $(this).val();
        $(this).val(value.toUpperCase());
    });

    $('body').on('click', '.add-item-cat', function () {
        $(this).parent().prev().append(`<div class="bg-white border-radius-10 p-30 mt-20">
                            <div class="d-flex justify-content-between align-items-center">
                                <h3 class="fs-21 ff-nt-sans fst-normal letter-spacing-10 fw-bolder text-blue mb-0">????????????</h3>
                                <img class="cursor-pointer sub-input" src="./asset/image/icon_sub.svg">
                            </div>
                            <div class="d-inline-block label mt-20">
                                <label class="me-19 ff-nt-sans fst-normal fw-500 fs-16 letter-spacing-10">?????????????????? </label>
                                <button class="button button-danger bg-color-red text-white border-radius-4 w-62 h-26">??????</button>
                            </div>
                            <div class="custom-select w-100 position-relative mt-14 mb-4px">
                                <select style="z-index: 1" class="border-radius-5 form-control ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input">
                                    <option class="text-color-gray-dark" value="0">?????????????????????</option>
                                    <option>????????????????????? 1</option>
                                    <option>????????????????????? 2</option>
                                    <option>????????????????????? 3</option>
                                    <option>????????????????????? 4</option>
                                </select>
                            </div>
                        </div>`);
        changeSelect();
    });

    $('body').on('click', '.add-item-transport', function (){
        $('.list-box', $(this).parent().prev()).append(`<div class="d-flex align-items-center mt-20">
                                                <input type="tel" class="text-end border-gray bg-color-gray-1 ff-nt-sans fst-normal letter-spacing-10 form-control h-5 border-input me-25 w-100" placeholder="3,000"/>
                                                <span>???</span>
                                                <span><img class="ms-14 sub-input cursor-pointer" src="./asset/image/icon_sub.svg"/></span>
                                            </div>`);
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    $('input[type=radio]').click(function (e){
        let currentValue = $(this).data('currentValue') || false;
        const name = $(this).prop('name');
        $('input[type=radio][name="'+name+'"]').each(function(){
            $(this).closest('.active').removeClass('active');
        })
        if(currentValue){
            $(this).prop("checked", false);
            // $(this).closest('.active').removeClass('active');
            currentValue = false;
        }else{
            currentValue = true;
        }
        $('input[type=radio][name="'+name+'"]').data('currentValue', false);
        $(this).data('currentValue', currentValue);
    });
});
