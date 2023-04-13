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

    if (filterButton) {
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
    }
    if (filterCloser) {
        filterCloser.addEventListener('click', () => {
            if (filterButton.classList.contains('active')) {
                filterButton.classList.remove('active')
                filterMobile.classList.remove('catalog-side--active')
                document.body.style.overflow = 'visible'
            }
        });
    }

    if (filterViewButton) {
        filterViewButton.addEventListener('click', () => {
            if (filterViewButton.classList.contains('active')) {
                filterViewButton.classList.remove('active')
                filterViewItems.classList.remove('active')
            } else {
                filterViewButton.classList.add('active')
                filterViewItems.classList.add('active')
            }
        });
    }

    if (filterSortButton) {
        filterSortButton.addEventListener('click', () => {
            if (filterSortButton.classList.contains('active')) {
                filterSortButton.classList.remove('active')
                filterSortItems.classList.remove('active')
            } else {
                filterSortButton.classList.add('active')
                filterSortItems.classList.add('active')
            }
        });
    }

    let catalogPresets = document.querySelectorAll('.catalog-presets__group');
    let catalogPresetButtons = document.querySelectorAll('.catalog-presets__more');

    if (catalogPresets) {
        catalogPresets.forEach((catalogPreset, i) => {
            let catalogPresetItems = catalogPreset.querySelector('.catalog-presets__items');
            let catalogPresetItem = catalogPreset.querySelector('.catalog-presets__item');
            let catalogPresetButton = catalogPreset.querySelector('.catalog-presets__more');
            let catalogPresetItemsHeight = catalogPresetItems.offsetHeight;
            let catalogPresetItemHeight = catalogPresetItem.offsetHeight;

            if (catalogPresetItemsHeight > catalogPresetItemHeight) {
                catalogPresetItems.classList.add('max-content');
                catalogPresetButton.style.display = 'block';
            }
        });
    }

    if (catalogPresetButtons) {
        catalogPresetButtons.forEach((catalogPresetButton, i) => {
            catalogPresetButton.addEventListener('click', (e) => {
                if (e.target.classList.contains('active')) {
                    e.target.classList.remove('active');
                    e.target.textContent = 'Показать еще';
                    e.target.parentNode.querySelector('.catalog-presets__items.max-content').classList.remove('active');
                } else {
                    e.target.classList.add('active');
                    e.target.textContent = 'Скрыть';
                    e.target.parentNode.querySelector('.catalog-presets__items.max-content').classList.add('active');
                }
            })
        });
    }

    const brands = new Swiper('.brands-slider', {
        slidesPerView: 3,
        loop: false,
        spaceBetween: 10,
        navigation: {
            nextEl: '.brands-slider__arrow--next',
            prevEl: '.brands-slider__arrow--prev',
        },
        pagination: {
            el: ".brands-count",
            type: "fraction",
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
        },
    });


    const catalogItemGallery = new Swiper('.good-slider', {
        slidesPerView: 1,
        loop: false,
        spaceBetween: 10,
        pagination: {
            el: ".good-slider__pagination",
            type: "bullets",
        },
    });

    // let thumbs = document.querySelectorAll('.good-slider__pagination .swiper-pagination-bullet');
    //
    // thumbs.forEach((thumb) => {
    //     thumb.addEventListener('mouseenter', (e) => {
    //         e.target.dispatchEvent('click');
    //     })
    // });

    var collectionGallery = new Swiper(".collection-thumbs", {
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".collection-thumbs__arrow--next",
            prevEl: ".collection-thumbs__arrow--prev",
        },
    });
    var collectionGallery2 = new Swiper(".collection-gallery", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".collection-gallery__arrow--next",
            prevEl: ".collection-gallery__arrow--prev",
        },
        thumbs: {
            swiper: collectionGallery,
        },
    });

    let goodsBuyButtons = document.querySelectorAll('.js-cart-add')

    if (goodsBuyButtons) {
        goodsBuyButtons.forEach((goodsBuyButton)=>{
            goodsBuyButton.addEventListener('click', (e)=>{
                if (e.target.classList.contains('js-cart-add')){
                    e.target.classList.remove('js-cart-add')
                    e.target.classList.add('js-cart-remove')
                    e.target.text = 'В корзине'
                } else {
                    e.target.classList.remove('js-cart-remove')
                    e.target.classList.add('js-cart-add')
                    e.target.text = 'Добавить в корзину'
                }
            })
        })
    }

    let goodsCompareButtons = document.querySelectorAll('.js-compare-add')
    console.log(goodsCompareButtons.length);
    if (goodsCompareButtons) {
        goodsCompareButtons.forEach((goodsCompareButton)=>{
            goodsCompareButton.addEventListener('click', ()=>{
                if (goodsCompareButton.classList.contains('js-compare-add')){
                    goodsCompareButton.classList.remove('js-compare-add')
                    goodsCompareButton.classList.add('js-compare-remove')
                } else {
                    goodsCompareButton.classList.remove('js-compare-remove')
                    goodsCompareButton.classList.add('js-compare-add')
                }
            })
        })
    }

});
