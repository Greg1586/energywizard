$(document).ready(function () {
//togglers

    $('.yes').click(function () {
        $(this).toggleClass("toggle-active");
        $(".no").toggleClass("toggle-active");
        $(".radio-content-1").toggleClass("show-class");
        $(".radio-1").toggleClass("radio-toggle-alt");
        $(".radio-2").toggleClass("radio-toggle-alt");
    });
    $('.no').click(function () {
        $(this).toggleClass("toggle-active");
        $(".yes").toggleClass("toggle-active");
        $(".radio-content-1").toggleClass("show-class");
        $(".radio-1").toggleClass("radio-toggle-alt");
        $(".radio-2").toggleClass("radio-toggle-alt");
    });
    $('.dc').click(function () {
        $(this).toggleClass("toggle-active");
        $(".ac").toggleClass("toggle-active");
        $(".radio-content-2").toggleClass("hidden");
    });
    $('.ac').click(function () {
        $(this).toggleClass("toggle-active");
        $(".dc").toggleClass("toggle-active");
        $(".radio-content-2").toggleClass("hidden");
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
    $('.replacementInstallation').click(function () {
        if($('.replacementInstallation').is(':checked')) {
            $(".replacingContent").removeClass("hidden");
            $(".upgradingContent").addClass("hidden");
        }
    });
    $('.upgradingInstallation').click(function () {
        if($('.upgradingInstallation').is(':checked')) {
            $(".upgradingContent").removeClass("hidden");
            $(".replacingContent").addClass("hidden");
        }
    });
    // $('.replacementInstallation').click(function () {
    //     $(".replacingContent").toggleClass("hidden");
    //     $(".upgradingContent").toggleClass("hidden");
    // });
    // $('.upgradingInstallation').click(function () {
    //     $(".upgradingContent").toggleClass("hidden");
    //     $(".replacingContent").toggleClass("hidden");
    // });
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
