$(document).ready(function () {

               // setTimeout(creaSlider, 10)
               creaSlider();
               function creaSlider() {
                    var mySwiper = new Swiper ('.swiper-container', {
                      // Optional parameters
                      direction: 'horizontal',
                      loop: true,
                      simulateTouch: true,
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
                          clickable: true,
                          dynamicBullets: true,
                          dynamicMainBullets: 1
                      },

                      // Navigation arrows
                      navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      },


                    });
               };






});
