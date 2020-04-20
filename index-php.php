<!DOCTYPE html>
<html lang="en" dir="ltr">
     <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="dist/css/swiper.min.css">
          <link rel="stylesheet" href="dist/css/style.css">
          <script src="dist/js/jquery.min.js" charset="utf-8"></script>
          <script src="dist/js/handlebars.min.js" charset="utf-8"></script>
          <title>Php-ajax-dischi</title>
     </head>
     <body>
          <header>

               <div class="container-fluid container-fluid-up  clearfix">
                    <div class="flex-container flex-center title">
                         <h1>
                              Bartolify
                         </h1>
                    </div>
               </div>


          </header>




          <main>
               <div class="container-fluid main bg-black">
                    <div class="container title-main">
                         <div class="flex-container flex-center title-main">
                              <div class="swiper-container">
                                  <!-- Additional required wrapper -->

                                  <div class="swiper-wrapper">
                                       <?php
                                            include 'data.php';
                                       ?>
                                             <?php  foreach ($albums as $key => $album) {?>
                                                  <div class="swiper-slide">
                                                       <div class="card" style="background-image: url('<?php echo $album['img'] ?>') ;">
                                                            <div class="div-album">
                                                                 <img src="<?php echo $album['img'] ?>" alt="">
                                                            </div>
                                                            <div class="div-descrizioni">
                                                                 <h2><?php echo $album['albumtitle'] ?></h2>
                                                                 <p><?php echo $album['artistname'] ?></p>
                                                                 <p><?php echo $album['year'] ?></p>

                                                            </div>
                                                       </div>
                                                  </div>
                                        <?php }?>
                                  </div>
                                  <!-- If we need pagination -->
                                  <div class="swiper-pagination"></div>


                                  <!-- If we need scrollbar -->
                                  <div class="swiper-scrollbar"></div>
                              </div>
                         </div>
                    </div>
               </div>
          </main>

     <script src="dist/js/swiper.min.js" charset="utf-8"></script>
     <script src="dist/js/main2.js" charset="utf-8"></script>
     </body>
</html>
