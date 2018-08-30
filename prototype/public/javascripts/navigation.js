$(document).ready(function() {

  //Oh god I'm so sorry please don't use my javascript T____T

    var bodyClass = $("body").attr('class').split(' ')[0];
    var bodyClass2 = $("body").attr('class').split(' ')[1];
    var bodyClass3 = $("body").attr('class').split(' ')[2];

    var currentPrimary = $(".main li:contains('"+bodyClass+"')");
    var currentSecondary = $(".secondary ul").hasClass('' +bodyClass+ '');
    var currentTertiary = $(".tertiary ul").hasClass('' +bodyClass2+ '');
    

    $(currentPrimary).addClass('selected');

    if(currentSecondary == true){
      $('.'+ bodyClass +'').addClass('selected');
      $('.'+ bodyClass +' li:contains("'+bodyClass2+'")').addClass('selected');
    }

    if(currentTertiary == true){
      $('.'+ bodyClass2 +'').addClass('selected');
      $('.'+ bodyClass2 +' li:contains("'+bodyClass3+'")').addClass('selected');
    }
   

  if ($(".single-blog-post").length > 0){
    $("li.selected").removeClass("selected");
  }

  //mobile
  $(".nav-mobile").click( function() {
    $("body").toggleClass('mobile-nav-active').removeClass('mobile-sidebar-active');
    $("html").toggleClass('hidden');
  });
  $(".sidebar-mobile").click( function() {
    $("body").toggleClass('mobile-sidebar-active').removeClass('mobile-nav-active');
    $("html").toggleClass('hidden');
  });

  $(".search-mobile").click(function(){
    $("body").toggleClass('mobile-search-active');
  });

  $(".callin").click(function(){
    $("body").toggleClass('mobile-categories-active');
  });
  $(".blog-mob-search").click(function(){
    $("body").toggleClass('mobile-search-active');
  });


  $("body").delegate('.overlay-trigger','click', function() {
    $('body').removeClass('mobile-sidebar-active');
  });


//Responsive Swiping

function onSwipe(className) {
  return function() {
    if( $("body").hasClass('mobile-sidebar-active') ) {
      $("body").removeClass('mobile-sidebar-active');
      $("html").removeClass('hidden');
      return;
    }

    if( $("body").hasClass('mobile-nav-active') ) {
      $("body").removeClass('mobile-nav-active');
      $("html").removeClass('hidden');
      return;
    }

    $("body").addClass(className);
    $("html").addClass('hidden');

  }
}

Hammer('.page-wrapper').on("swiperight", onSwipe('mobile-nav-active'));

Hammer('.page-wrapper').on("swipeleft", onSwipe('mobile-sidebar-active'));

});

//fixing Navigation

// $(function() {

//     var navigation  = $("header");

//     $(window).scroll(function() {
//         if ($(window).scrollTop() > navigation.offset().top) {
//             $("body").addClass('scrolled');
//         }
//          if ($(window).scrollTop() < navigation.offset().top) {
//             $("body").removeClass('scrolled');
//         }
//     });

// });


