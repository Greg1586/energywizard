$(document).ready(function () {
//togglers

    $('.solar-yes').click(function () {
        $(this).toggleClass("toggle-active");
        $(".solar-no").toggleClass("toggle-active");
        $(".radio-content-1").toggleClass("show-class");
        $(".radio-1").toggleClass("radio-toggle-alt");
        $(".radio-2").toggleClass("radio-toggle-alt");
        // if (($('.solar-yes').is(".toggle-active")) && (!$(".windQuery, .hydroQuery").is(":checked"))) {
        //     $(".instructionContentBattery").addClass("hidden");
        // }
    });
    $('.solar-no').click(function () {
        $(this).toggleClass("toggle-active");
        $(".solar-yes").toggleClass("toggle-active");
        $(".radio-content-1").toggleClass("show-class");
        $(".radio-1").toggleClass("radio-toggle-alt");
        $(".radio-2").toggleClass("radio-toggle-alt");
        // if (($('.solar-no').is(".toggle-active")) && (!$(".windQuery, .hydroQuery").is(":checked"))) {
        //     $(".instructionContentBattery").removeClass("hidden");
        //     $(".instructionContent").addClass("hidden");
        // }
    });
    $('.battery-yes').click(function () {
        $(this).toggleClass("toggle-active");
        $(".battery-no").toggleClass("toggle-active");
        $(".radio-content-3").show();
        $(".radio-1").toggleClass("radio-toggle-alt");
        $(".radio-2").toggleClass("radio-toggle-alt");
        // if (($('.battery-yes').is(".toggle-active")) && (!$(".windQuery, .hydroQuery").is(":checked"))) {
        //     $(".instructionContentBattery").addClass("hidden");
        // }
    });
    $('.battery-no').click(function () {
        $(this).toggleClass("toggle-active");
        $(".battery-yes").toggleClass("toggle-active");
        $(".radio-content-3").hide();
        $(".radio-1").toggleClass("radio-toggle-alt");
        $(".radio-2").toggleClass("radio-toggle-alt");
        // if (($('.battery-no').is(".toggle-active")) && (!$(".windQuery, .hydroQuery").is(":checked"))) {
        //     $(".instructionContentBattery").removeClass("hidden");
        //     $(".instructionContent").addClass("hidden");
        // }
    });
    $('.replacement').click(function () {
        $(this).toggleClass("toggle-active");
        $(".adding").toggleClass("toggle-active");
    });
    $('.adding').click(function () {
        $(this).toggleClass("toggle-active");
        $(".replacement").toggleClass("toggle-active");
    });
    $('.dc').click(function () {
        $(this).toggleClass("toggle-active");
        $(".ac").toggleClass("toggle-active");
        $(".radio-content-2").hide();
    });
    $('.ac').click(function () {
        $(this).toggleClass("toggle-active");
        $(".dc").toggleClass("toggle-active");
        $(".radio-content-2").show();
    });
    $('.windQuery').click(function () {
        $(".wind-content").toggleClass("hidden");
        $(".instructionContentBattery").addClass("hidden");
    });
    $('.hydroQuery').click(function () {
        $(".hydro-content").toggleClass("hidden");
        $(".instructionContentBattery").addClass("hidden");
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
    $('.newInstallation').click(function () {
        if($('.newInstallation').is(':checked')) {
            $(".upgradingContent").addClass("hidden");
            $(".replacingContent").addClass("hidden");
        }
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
    $('.dismissDynamic').click(function () {
        $("#dynamicWarning").hide();
    });
    // $('.phaseSelector').change(function () {
    //     if ($(this).val() !== '1') {
    //         $(".phase").show();
    //     }
    //     if ($(this).val() === '1') {
    //         $(".phase").hide();
    //     }
    // });
});
