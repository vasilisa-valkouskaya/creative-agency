// swiper
const mySwiper = new Swiper('.team-gallery', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-forward',
        prevEl: '.swiper-button-back',
    },
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