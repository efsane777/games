$(document).ready(function() {

    // Gets Link for Theme Song
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'https://res.cloudinary.com/thefinleycode/image/fetch/https://res.cloudinary.com/thefinleycode/video/upload/v1471282750/captainplanet24_h3z2bb.mp3');

    // Theme Button
    $(".themeButton").on("click", function() {
        audioElement.play();
    });

    $(".pauseButton").on("click", function() {
        audioElement.pause();
    });

    // Size Buttons
    $(".normalButton").on("click", function() {
        $(".captainplanet").animate({
            height: '300px'
        });
    });

    $(".growButton").on("click", function() {
        $(".captainplanet").animate({
            height: '500px'
        });
    });

    $(".shrinkButton").on("click", function() {
        $(".captainplanet").animate({
            height: '100px'
        });
    });

    $(".destroyButton").on("click", function() {
            $('.destroy').css({
                    position: 'absolute', left: -700, top:-400});

                    // left: ($(window).width() - $('.drop2').outerWidth()) / 2,
                    // top: ($(window).height() - $('.drop2').outerHeight()) / 2, });
                 $(".captainplanet").animate({
                    height: '1000px'
                }); $('body').css('background-color', 'red');
              
            });

        // Visibility Buttons
        $(".visButton").on("click", function() {
            $(".captainplanet").animate({
                opacity: '1'
            });
        });

        $(".invisButton").on("click", function() {
            $(".captainplanet").animate({
                opacity: '0.05'
            });
        });

        // Move Buttons
        $(".upButton").on("click", function() {
            $(".captainplanet").animate({
                top: "-=200px"
            }, "normal");
        });

        $(".downButton").on("click", function() {
            $(".captainplanet").animate({
                top: "+=200px"
            }, "normal");
        });

        $(".leftButton").on("click", function() {
            $(".captainplanet").animate({
                left: "-=200px"
            }, "normal");
        });

        $(".rightButton").on("click", function() {
            $(".captainplanet").animate({
                left: "+=200px"
            }, "normal");
        });

        $(".backButton").on("click", function() {
            $(".captainplanet").animate({
                top: "50px",
                left: "80px"
            }, "fast");
        });

        // Move Buttons (Keyboard Down)
        $(document).keyup(function(e) {
            switch (e.which) {
                case 40:
                    $(".captainplanet").animate({
                        top: "+=200px"
                    }, "normal");
            }
        });

        // Move Buttons (Keyboard Right)
        $(document).keyup(function(e) {
            switch (e.which) {
                case 39:
                    $(".captainplanet").animate({
                        left: "+=200px"
                    }, "normal");
            }
        });

        // Move Buttons (Keyboard Up)
        $(document).keyup(function(e) {
            switch (e.which) {
                case 38:
                    $(".captainplanet").animate({
                        top: "-=200px"
                    }, "normal");
            }
        });

        // Move Buttons (Keyboard Left)
        $(document).keyup(function(e) {
            switch (e.which) {
                case 37:
                    $(".captainplanet").animate({
                        left: "-=200px"
                    }, "normal");
            }
        });

    });