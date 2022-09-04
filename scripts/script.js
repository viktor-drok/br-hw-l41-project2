new Swiper(".hero__swiper", {
    direction: "vertical",
    pagination: {
        el: ".hero__swiper .swiper-pagination",
        clickable: true,
    },
});

new Swiper(".news-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".news-swiper .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".news-swiper .swiper-button-next",
        prevEl: ".news-swiper .swiper-button-prev",
    },
});