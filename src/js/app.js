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
})