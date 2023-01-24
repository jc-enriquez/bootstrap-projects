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
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
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

let mybutton = document.getElementById("scroll-btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
