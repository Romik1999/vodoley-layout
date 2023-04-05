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
})