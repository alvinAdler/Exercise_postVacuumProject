var welcome_box = $(".inner-welcome-box")
var cards = $(".card")
var circles = $(".circle")
var card_button = $(".card button")
var footer_links = $(".footer_link")

var card_default_css = {
    "background-color" : "transparent",
    "color" : "#c7c7c7",
    "border" : "3px solid #c7c7c7",
    "transition" : "0.2s"
}

var circle_and_card_default_css = {
    "background-color" : "transparent",
    "border-color" : "#c7c7c7",
    "transition" : "0.2s"
}

//==== DOM: WELCOME BOX ====
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

//==== DOM: END OF WELCOME BOX ====


//==== DOM: FIRST CARD ====

cards.eq(0).mouseover(function(){
    var card1_newscss = {
        "background-color" : "#c7c7c7",
        "color" : "#2b2b2b",
        "border" : "3px solid #9c9a9a",
        "transition" : "0.2s",
    }

    var circle1_newcss = {
        "background-color" : "#f54242",
        "border-color" : "#f54242",
        "transition" : "0.2s"
    }

    var button1_newcss = {
        "background-color" : "#f54242",
        "color" : "#c7c7c7",
        "border-color" : "#f54242" 
    }

    $(this).css(card1_newscss);
    $(".card .card-header").eq(0).css("border-bottom-color", "#2b2b2b");

    $("#button-card1").css("color", "#2b2b2b");
    $("#button-card1").css("border", "2px solid #2b2b2b");

    circles.eq(0).css(circle1_newcss)

    card_button.eq(0).css(button1_newcss)
})

cards.eq(0).mouseout(function(){
    $(this).css(card_default_css);
    $(".card .card-header").eq(0).css("border-bottom-color", "#c7c7c7");

    $("#button-card1").css("color", "#c7c7c7");
    $("#button-card1").css("border", "2px solid #c7c7c7");

    circles.eq(0).css(circle_and_card_default_css)

    $(card_button).eq(0).css(circle_and_card_default_css)
})

//==== DOM: END OF FIRST CARD


//==== DOM: SECOND CARD ====

cards.eq(1).mouseover(function(){
    var card2_newscss = {
        "background-color" : "#c7c7c7",
        "color" : "#2b2b2b",
        "border" : "3px solid #9c9a9a",
        "transition" : "0.2s",
    }

    var circle2_newcss = {
        "background-color" : "#3477eb",
        "border-color" : "#3477eb",
        "transition" : "0.2s"
    }

    var button2_newcss = {
        "background-color" : "#3477eb",
        "color" : "#c7c7c7",
        "border-color" : "#3477eb" 
    }

    $(this).css(card2_newscss);
    $(".card .card-header").eq(1).css("border-bottom-color", "#2b2b2b");

    $("#button-card2").css("color", "#2b2b2b");
    $("#button-card2").css("border", "2px solid #2b2b2b");

    circles.eq(1).css(circle2_newcss)

    card_button.eq(1).css(button2_newcss)
})

cards.eq(1).mouseout(function(){
    $(this).css(card_default_css);
    $(".card .card-header").eq(1).css("border-bottom-color", "#c7c7c7");

    $("#button-card2").css("color", "#c7c7c7");
    $("#button-card2").css("border", "2px solid #c7c7c7");

    circles.eq(1).css(circle_and_card_default_css)

    $(card_button).eq(1).css(circle_and_card_default_css)
})

//==== DOM: END OF SECOND CARD


//==== DOM: THIRD CARD ====

cards.eq(2).mouseover(function(){
    var card3_newscss = {
        "background-color" : "#c7c7c7",
        "color" : "#2b2b2b",
        "border" : "3px solid #9c9a9a",
        "transition" : "0.2s",
    }

    var circle3_newcss = {
        "background-color" : "#2db32d",
        "border-color" : "#2db32d",
        "transition" : "0.2s"
    }

    var button3_newcss = {
        "background-color" : "#2db32d",
        "color" : "#c7c7c7",
        "border-color" : "#2db32d" 
    }

    $(this).css(card3_newscss);
    $(".card .card-header").eq(2).css("border-bottom-color", "#2b2b2b");

    $("#button-card3").css("color", "#2b2b2b");
    $("#button-card3").css("border", "2px solid #2b2b2b");

    circles.eq(2).css(circle3_newcss)

    card_button.eq(2).css(button3_newcss)
})

cards.eq(2).mouseout(function(){
    $(this).css(card_default_css);
    $(".card .card-header").eq(2).css("border-bottom-color", "#c7c7c7");

    $("#button-card3").css("color", "#c7c7c7");
    $("#button-card3").css("border", "2px solid #c7c7c7");

    circles.eq(2).css(circle_and_card_default_css)

    $(card_button).eq(2).css(circle_and_card_default_css)
})

//==== DOM: END OF THIRD CARD

//==== DOM: FOOTER LINKS

$(footer_links).eq(0).mouseover(function(){
    $(this).css("color", "#f54242")
    $(this).css("transition", "0.2s")
});

$(footer_links).eq(1).mouseover(function(){
    $(this).css("color", "#3477eb")
    $(this).css("transition", "0.2s")
});

$(footer_links).eq(2).mouseover(function(){
    $(this).css("color", "#2db32d")
    $(this).css("transition", "0.2s")
});

$(footer_links).mouseout(function(){
    $(this).css("color", "#c7c7c7")
    $(this).css("transition", "0.2s")
})

//==== DOM: END OF FOOTER LINKS
