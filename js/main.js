
$(window).on("load", function () {
  $('body,html').scrollTop(0)
  $(".pre-loader").fadeOut(500, function () {
      $(this).remove();
      $('html, body').css("overflow-y", "visible");


  });
});

  // AOS.init();
  // new WOW().init();
  $('.zx-nav .selectpicker').selectpicker();
  $('.zx-search-pop .zx-search .selectpicker').selectpicker();
$(function() {


  // $(window).scroll(function () {
  //     if ($(window).scrollTop() > $(".upper-bar").innerHeight() ) {
        
  //   } else {
        
  //   }
    
  //   });

  // $('a[data-scroll]').on("click",function (e){
  //   e.preventDefault();    
    
  //   $("html, body").animate({
  //     scrollTop: $($(this).attr("data-scroll")).offset().top
  //   }, 1000);
  // });

    $(".categories .cat-toggle").on("click", function() {
      $(".categories .category-list").slideToggle();
    });

    $('.zx-header .owl-carousel').owlCarousel({
      rtl: document.dir == 'rtl' ? true : false,
      autoplay:true,
      loop:true,
      margin:0,
      dots:true,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:1,
              nav:false
          },
          1000:{
              items:1,
              nav:false,
              loop:true
          }
      }
  });

  $('.our-products .owl-carousel').owlCarousel({
    rtl: document.dir == 'rtl' ? true : false,
    autoplay:true,
    loop:true,
    margin:0,
    dots:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
});
$( ".owl-prev").html('<img src="images/arrow-left.png">');
$( ".owl-next").html('<img src="images/arrow-right.png">');

  $(".footer .contact-info h3").on("click", function () {
    $(this).toggleClass("active");
    $(this).siblings("ul").slideToggle();
  });



  $(".zx-nav .zx-search-popup").on("click", function () {
    $(".zx-search-pop").fadeIn();
    $('html, body').css("overflow-y", "hidden");
  });
  $(".zx-search-pop .overlay").on("click", function() {
    $(".zx-search-pop").fadeOut();
    $('html, body').css("overflow-y", "visible");
  });
  // $(".zx-search-pop .overlay .zx-search").on("click", function(e) {
  //   e.stopPropagation();
  // });


  $(".zx-nav .zx-container .zx-on-card .menu").on("click", function () {
    $(".zx-fixed-menu .overlay").fadeIn();
    $(".zx-fixed-menu .overlay .side-menu").addClass("slide");
    $('html, body').css("overflow-y", "hidden");
  });
  $(".zx-fixed-menu .overlay, .close").on("click", function() {
    $(".zx-fixed-menu .overlay").fadeOut();
    $(".zx-fixed-menu .overlay .side-menu").removeClass("slide");
    $('html, body').css("overflow-y", "visible");
  });
  $(".zx-fixed-menu .overlay .side-menu").on("click", function(e) {
    e.stopPropagation();
  });


  $(".zx-fixed-menu .overlay .side-menu ul .slide-down").on("click", function () {
    $(this).toggleClass("active");
    $(this).children("ul").slideToggle();
  });







});