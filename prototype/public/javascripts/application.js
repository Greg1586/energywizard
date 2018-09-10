$(document).ready(function () {
//togglers

    $('.toggler1').click(function () {
        $(this).toggleClass("togglerOn");
        $(".radio-content-1").toggleClass("show-class");
        $(".radio-1").toggleClass("radio-toggle-alt");
        $(".radio-2").toggleClass("radio-toggle-alt");
    });
    $('.toggler2').click(function () {
        $(this).toggleClass("togglerOn");
        $(".radio-content-2").toggleClass("show-class");
        $(".radio-3").toggleClass("radio-toggle-alt");
        $(".radio-4").toggleClass("radio-toggle-alt");
    });
    $('.windQuery').click(function () {
        $(".wind-content").toggleClass("hidden");
    });
    $('.hydroQuery').click(function () {
        $(".hydro-content").toggleClass("hidden");
    });
    $('.inverterToggler1').click(function () {
        $(".extra-inverter1").toggleClass("hidden");
    });
    $('.inverterToggler2').click(function () {
        $(".extra-inverter2").toggleClass("hidden");
    });
    $('.inverterSelector, .inverterSelector2, .inverterSelector3').change(function () {
        if ($(this).val() === '1') {
            $(".linkContent1").hide();
            $(".linkContent2").hide();
        }
        if ($(this).val() === '2') {
            $(".instructionContent").hide();
            $(".linkContent1").show();
            $(".linkContent2").hide();
        }
        if ($(this).val() === '3') {
            $(".instructionContent").hide();
            $(".linkContent2").show();
            $(".linkContent1").hide();
        }
    });
});
