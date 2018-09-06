$(document).ready(function() {
//togglers

$('.toggler1').click(function(){
  $(this).toggleClass("togglerOn");
  $(".radio-content-1").toggleClass("show-class");
  $(".radio-1").toggleClass("radio-toggle-alt");
  $(".radio-2").toggleClass("radio-toggle-alt");
  });
$('.toggler2').click(function(){
  $(this).toggleClass("togglerOn");
  $(".radio-content-2").toggleClass("show-class");
  $(".radio-3").toggleClass("radio-toggle-alt");
  $(".radio-4").toggleClass("radio-toggle-alt");
});
$('.windQuery').click(function(){
  $(".wind-content").toggleClass("hidden");
});
$('.hydroQuery').click(function(){
  $(".hydro-content").toggleClass("hidden");
});
$('.inverterToggler1').click(function(){
  $(".extra-inverter1").toggleClass("hidden");
});
$('.inverterToggler2').click(function(){
  $(".extra-inverter2").toggleClass("hidden");
});
$('.inverterSelector').change(function(){
if ($(this).val() === '2') {
    $(".linkContent1").show();
    $(".linkContent2").hide();
}
if ($(this).val() === '3') {
    $(".linkContent2").show();
    $(".linkContent1").hide();
}
});
});



// $('.batteryQuery').click(function(){
//   $(".battery-content").toggleClass("hider-class");
// });
// $('.solarQuery').click(function(){
//   $(".solar-content").toggleClass("hider-class");
// });
// $('.otherQuery').click(function(){
//   $(".other-content").toggleClass("hider-class");
// });
// $('.solarToggler').click(function(){
//     $(this).toggleClass("solarTogglerOn");
//     $(".solar-content").toggleClass("show-class");
//     $(".solar-class").toggleClass("radio-toggle");
// });
//   $('.inverterToggler').click(function(){
//       $(".extra-inverter").toggleClass("hidden");
// });
// $('.batteryToggler').click(function(){
//     $(this).toggleClass("batteryTogglerOn");
//     $(".whatever").toggleClass("show-class");
//     $(".solar-class").toggleClass("radio-toggle");
// });
// $('.otherToggler').click(function(){
//     $(this).toggleClass("batteryTogglerOn");
//     $(".whatever").toggleClass("show-class");
//     $(".solar-class").toggleClass("radio-toggle");
// });

