const swiperHome = new Swiper(".swiper-home", {
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
    },
  },
});

let labels = [
  "Architecture",
  "Landscape",
  "Interior",
  "Product Design",
  "Graphic Design",
];

const swiperAbout = new Swiper(".swiper-about", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + labels[index] + "</div>";
    },
  },
  effect: "fade",
});
