$(document).ready(function () {
     var mySwiper = new Swiper ('.swiper-container', {
       // Optional parameters
       direction: 'horizontal',
       loop: true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
       keyboard: {
        enabled: true,
      },
       // If we need pagination
       pagination: {
            el: '.swiper-pagination',
           clickable: true
       },

       // Navigation arrows
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },


     })
});
