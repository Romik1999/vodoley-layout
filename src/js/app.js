document.addEventListener('DOMContentLoaded', () => {
    const banners = new Swiper('.banners-slider', {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 20,
        navigation: {
            nextEl: '.banners-slider__arrow--next',
            prevEl: '.banners-slider__arrow--prev',
        }
    });

    let filterButton = document.querySelector('.catalog__button');
    let filterMobile = document.querySelector('.catalog-side');
    let filterCloser = document.querySelector('.catalog-side__close');
    let filterViewButton = document.querySelector('.catalog-views__title');
    let filterViewItems = document.querySelector('.catalog-views__items');

    let filterSortButton = document.querySelector('.catalog-sort__title');
    let filterSortItems = document.querySelector('.catalog-sort__items');

    filterButton.addEventListener('click', () => {
        if (filterButton.classList.contains('active')) {
            filterButton.classList.remove('active')
            filterMobile.classList.remove('catalog-side--active')
            document.body.style.overflow = 'visible'
        } else {
            filterButton.classList.add('active')
            filterMobile.classList.add('catalog-side--active')
            document.body.style.overflow = 'hidden'
        }
    });

    filterCloser.addEventListener('click', () => {
        if (filterButton.classList.contains('active')) {
            filterButton.classList.remove('active')
            filterMobile.classList.remove('catalog-side--active')
            document.body.style.overflow = 'visible'
        }
    });

    filterViewButton.addEventListener('click', () => {
        if (filterViewButton.classList.contains('active')) {
            filterViewButton.classList.remove('active')
            filterViewItems.classList.remove('active')
        } else {
            filterViewButton.classList.add('active')
            filterViewItems.classList.add('active')
        }
    });

    filterSortButton.addEventListener('click', () => {
        if (filterSortButton.classList.contains('active')) {
            filterSortButton.classList.remove('active')
            filterSortItems.classList.remove('active')
        } else {
            filterSortButton.classList.add('active')
            filterSortItems.classList.add('active')
        }
    });
})