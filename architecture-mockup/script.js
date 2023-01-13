const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  mousewheel: true,
  autoplay: true,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const swiper2 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesProgress: true,
});
const swiper3 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
