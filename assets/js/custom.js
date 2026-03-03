// Custom JavaScript for Keystone One
(function () {
  "use strict";

  // Featured Work Slider
  // ----------------------------------------
  // Responsive breakpoints: shows 1 slide on mobile, 2 on tablet, 2 on desktop
  new Swiper(".featured-work-slider", {
    spaceBetween: 24,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".featured-work-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
    },
  });

  // Client Logo Carousel
  // ----------------------------------------
  // Auto-scrolling logo carousel with responsive breakpoints
  new Swiper(".client-logo-slider", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 800,
    slidesPerView: 2,
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 60,
      },
    },
  });
})();
