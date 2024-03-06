var swiper = new Swiper(".mySwiperSrv", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-srv",
    prevEl: ".swiper-button-prev-srv",
  },
  breakpoints: {

    300: {
      slidesPerView: 1,
      autoplay: false,
    },

    501: {
      slidesPerView: 1,
      spaceBetween: 20,

    },

    769: {
      slidesPerView: 2,
    },

    1025: {
      slidesPerView: 2,
    },
  }
});

var swiper = new Swiper(".mySwiperSrvEnterprise", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-srv",
    prevEl: ".swiper-button-prev-srv",
  },
  breakpoints: {

    300: {
      slidesPerView: 1,
      autoplay: false,
    },

    501: {
      slidesPerView: 1,
      spaceBetween: 20,

    },

    769: {
      slidesPerView: 2,
    },

    1025: {
      slidesPerView: 2,
    },
  }
});

var swiperTestimonial = new Swiper(".mySwiperTestimonial", {
  slidesPerView: 3,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-nexts",
    prevEl: ".swiper-button-prevs",
  },
  mousewheel: false,
  keyboard: true,
  loop: true,
  breakpoints: {

    300: {
      slidesPerView: 1
    },

    501: {
      slidesPerView: 1
    },

    769: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 10
    },
  }
});