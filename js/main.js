// sticky-header

window.addEventListener('scroll', function() {
    let header = document.querySelector('.sticky');
    header.classList.toggle('show-header', window.scrollY > 500);
});

// mobile menu

let btnBurger = document.querySelector('.burger-menu');
let body = document.querySelector('body');

btnBurger.addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('show');
    btnBurger.classList.toggle('active');
    body.classList.toggle('overflow');
});

// swiper
const mySwiper = new Swiper('.team-gallery', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-forward',
        prevEl: '.swiper-button-back',
    },
    breakpoints: {
        740: {
            slidesPerView: 3
        },
        1175: {
            slidesPerView: 4
        }
    }
});

const bottomSwiper = new Swiper('.clients-gallery', {

    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// filter
let btnsFilterContainer = document.querySelector('.btn-filter-container');

btnsFilterContainer.addEventListener('click', function(e) {

    if (!e.target.closest('button')) return;
    let btn = e.target.closest('button');
    if (btn.classList.contains('active')) return;

    let btns = document.querySelectorAll('.btn-filter-container button');

    let arrBtns = Array.prototype.slice.call(btns);
    removeClass(arrBtns, 'active');

    btn.classList.add('active');
    let btnId = btn.id;
    let blocks = document.querySelectorAll('.work-container');
    let arrBlocks = Array.prototype.slice.call(blocks);

    removeClass(arrBlocks, 'hide');

    if (btnId === 'all') return;
    arrBlocks
        .filter(block => (block.dataset.var != btnId))
        .map(block => block.classList.add('hide'));

});

let removeClass = function(arr, className) {
    arr
        .filter(item => item.classList.contains(className))
        .map(item => item.classList.remove(className));
};


//  menu anchor scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
};

// form

$(document).ready(function() {
    $("#form").submit(function(e) {
        e.preventDefault();
        if (($("#name").val() === '') || ($("#email").val() === '') || ($("#subject").val() === '') || ($("#company").val() === '') || ($("#message").val() === '')) {
            $('.message').hide();
            $('.error').show();
            return
        } else {
            $('.error').hide();
        }

        $.ajax({
            url: "https://formbucket.com/f/buk_3vVrfzO6YBHKugQpjYFH4C5K",
            method: "POST",
            dataType: "json",
            crossDomain: true,
            success: function() {
                $('.message').fadeToggle();
                $('#form')[0].reset();
            },
            data: $('#form')
                .serializeArray()

        });

    });
});