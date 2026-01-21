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
})();