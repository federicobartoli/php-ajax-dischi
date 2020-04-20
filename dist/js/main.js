$(document).ready(function () {



     //handlebars
     var source = document.getElementById("entry-template").innerHTML;
     var template = Handlebars.compile(source);

     $.ajax({
          url: 'server.php',
          method: 'GET',
          success: function (data) {
               var albums = data;
               for (var i = 0; i < albums.length; i++) {
                    var album = albums[i];
                    var context = {
                         img: album.img,
                         albumtitle: album.albumtitle,
                         artistname: album.artistname,
                         year: album.year
                    };
                    var html = template(context);

                    $('.swiper-wrapper').append(html);

               }
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


               })
          },
          error: function (error) {
               alert('BOOM');
          }
     });





});
