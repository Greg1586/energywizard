$(document).ready(function() {

//accordion
  $(".accordion-header").click( function() {
    $(this).parent().toggleClass('active');
  });

//logon dropdown
  $(".dropdown").click( function() {
    $(this).toggleClass('active');
  });
  $(".sidebar-content").click(function(){
    $(this).toggleClass('active');
  });

//overlays

  $(".overlay-trigger").click( function() {
    $('body').addClass('overlay-active');
  });

  $(".icon-remove-circle").click( function() {
    $('body').removeClass('overlay-active');
  });

  $("body").delegate('.overlay-bg','click', function() {
    $('body').removeClass('overlay-active');
  });

//feedback form
  $("#web-feedback").click( function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.web-feedback').addClass('selected').siblings().removeClass('selected');
  });

  $("#service-feedback").click( function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.service-feedback').addClass('selected').siblings().removeClass('selected');
  });



// search trigger
 $('.search > input').keypress(function(e) {
   if(e.which == 13) {
    window.location.replace("/search-results");
   }
  });

//child-tiles on child pages

if( $('.child-tiles li.active').length > 0){

  var countTiles = $(".child-tiles li.expandable-tile").length;

  if(countTiles > 3){
    $('.expandable-tile').children('.child-content').prepend($("<div class='icon-remove-circle'></div>"));
  }
  else if(countTiles <= 3){
  }
}

$('.child-page .child-tile').click(function(){
  var clickedTile = $(this).parent();
  clickedTile.addClass('active');
  clickedTile.siblings().removeClass('active');

});




//removing delete
$(".expandable-tile").delegate('.icon-remove-circle','click', function() {
  var thisParent = $(this).closest('li.expandable-tile');
  thisParent.removeClass('active');
});

// How to choose guide
$('.help-choose .prompt').click(function(){
  $(this).parent().addClass('active');
  $('.help-choose').addClass('selected');
  $('.small-nav').click(function(){
    $('.help-choose').removeClass('selected');
    $('.help-choose li').removeClass('active');
  });
});

// //fixing tables
// $(function() {

//     var tableHeader  = $(".table-header");
//     var table = $(".compare-table");
//     $(window).scroll(function() {
//         if ($(window).scrollTop() > tableHeader.offset().top) {
//             tableHeader.addClass('scrolled');
//         }
//         else if ($(window).scrollTop() < table.offset().top) {
//             tableHeader.removeClass('scrolled');
//         }

//     });

// });

$(".blog-comments").click(function(){
  $(this).addClass("active");
});

//calculators

var interestArray = [{backtoBasics: "5.41",
                      standardVariable: "5.99",
                      accessEquity: "6.09",
                      fixedRate: "5.09",
                      homePackage: "4.94",
                      blank: "",
                    }]



$('#product-selector').change(function(){

  var selected_item = $(":selected", this).text()
  
  $.each(interestArray, function(index, interest){
    if(selected_item=="Back to Basics"){
      $("#interest-rate").val(interest.backtoBasics);
    }
    if(selected_item=="Standard Variable"){
      $("#interest-rate").val(interest.standardVariable);
    }
    if(selected_item=="Access Equity"){
      $("#interest-rate").val(interest.accessEquity);
    }
    if(selected_item=="Fixed Rate Loan"){
      $("#interest-rate").val(interest.fixedRate);
    }
    if(selected_item=="Home Package Plus"){
      $("#interest-rate").val(interest.homePackage);
    }
    if(selected_item=="Select a Product"){
      $("#interest-rate").val(interest.blank);
    }
  });

});

$("#results-display-range").change(function() {
  var val = $("#results-display-range").val();
  var val2 = parseInt(val, 10);
  $("#big-home-animation").removeClass().addClass("change" + val2 + "");
});

$(".header-toggle").click(function(){
  $(".alternate-options").toggleClass("show");
});

$(".app-motto span").click(function(){
  $(".app-motto").css("display", "none");
});

$('.toggler').click(function(){
  $(this).toggleClass("togglerOn");
  $(".something").toggleClass("hider-class");
  $(".battery-class").toggleClass("dc-yes");
});
$('.batteryQuery').click(function(){
  $(".battery-content").toggleClass("hider-class");
});
$('.solarQuery').click(function(){
  $(".solar-content").toggleClass("hider-class");
});
$('.otherQuery').click(function(){
  $(".other-content").toggleClass("hider-class");
});
$('.solarToggler').click(function(){
    $(this).toggleClass("solarTogglerOn");
    $(".solar-content").toggleClass("show-class");
    $(".solar-class").toggleClass("solar-yes");
});
  $('.inverterToggler').click(function(){
      $(".extra-inverter").toggleClass("hidden");
    });
    // $('.toggler').click(function(){
    // });
});
$('.batteryToggler').click(function(){
    $(this).toggleClass("batteryTogglerOn");
});