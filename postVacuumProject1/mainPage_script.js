var welcome_box = $(".inner-welcome-box")

welcome_box.mouseover(function(){
    $(this).css("background-color", "rgb(208, 210, 214)");
    $(this).css("border-color", "#202421")

    $(".inner-welcome-box h1").css("color", "#f54242");
    $(this).css("transition", "0.3s");
    $(".inner-welcome-box p").css("color", "#2dad2d");

    $(".inner-welcome-box button").css("color", "#202421")
    $(".inner-welcome-box button").css("border-color", "#202421")
});

welcome_box.mouseout(function(){
    $(this).css("background-color", "transparent");
    $(this).css("border-color", "#c7c7c7")

    $(".inner-welcome-box h1").css("color", "#c7c7c7");
    $(this).css("transition", "0.3s");
    $(".inner-welcome-box p").css("color", "#c7c7c7");

    $(".inner-welcome-box button").css("color", "#c7c7c7")
    $(".inner-welcome-box button").css("border-color", "#c7c7c7")
});
