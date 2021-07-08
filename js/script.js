$(document).ready(function(){
    // Image Hide
    $(".hide").click(function(){
        $(".hide-img").hide(500);
    });

    // Image Show
    $(".hide-1").click(function(){
        $(".show-img").hide(500);
    });

    $(".show").click(function(){
        $(".show-img").show(500);
    });

    // Toggle Button
    $(".toggle").click(function(){
        $(".toggle-img").toggle(500);
    });

    // First Child
    $(".first-child").click(function(){
        $(".text-one:first").toggle(500);
    });

    // Last Child
    $(".last-child").click(function(){
        $(".text-one:last").toggle(500);
    });

    // Even
    $(".even li:even").css("background-color", "pink")

    // Odd
    $(".odd li:odd").css("background-color", "lime")

    // dbl click
    $(".dbl").dblclick(function(){
        $(this).hide(500);
    });

    // Mouse Enter
    $(".mouse-enter-img").mouseenter(function(){
        $(".mouse-enter-img").hide(1000);
    });

    // Mouse Leave
    $(".mouse-leave").mouseleave(function(){
        alert("Please Click me for full screen view.")
    });

    // Mouse Down
    $(".mouse-down-img").mousedown(function(){
        $(".mouse-down-img").fadeOut(1000);
    });

    // Mouse Up
    $(".mouse-up-img").mouseup(function(){
        $(".mouse-up-img").hide(1000);
    });

    // Hover
    $(".mouse-hover-btn").hover(function(){
        $(".mouse-hover-btn").css("color", "black");
    });

    // Multiple Event (mouseenter, mouseleave, click)
    $(".multieven").on({
        mouseenter: function(){
            $(this).css("background-color", "black")
        },

        mouseleave: function(){
            $(this).css("background-color", "red")
        },

        click: function(){
            $(this).css("background-color", "orange")
        },
    });

    // Fade In
    $(".fade-in").click(function(){
        $(".one").fadeIn();
        $(".two").fadeIn(1000);
        $(".three").fadeIn(2000);
    });

    // Fade Out
    $(".fade-out").click(function(){
        $(".one1").fadeOut();
        $(".two2").fadeOut(1000);
        $(".three3").fadeOut(2000);
    });

    // Fade Toggle
    $(".fade-toggle").click(function(){
        $(".one11").fadeToggle();
        $(".two22").fadeToggle(1000);
        $(".three33").fadeToggle(2000);
    });

    // Fade To
    $(".fade-to").click(function(){
        $(".one01").fadeTo(500, 0.1);
        $(".two02").fadeTo(1000, 0.4);
        $(".three03").fadeTo(2000, 0.8);
    });

    // Slide Down
    $(".slide-header").click(function(){
        $(".slide-down").slideDown(500);
    });

    // Slide Up
    $(".slide-header1").click(function(){
        $(".slide-up").slideUp(500);
    });

    // Slide Toggle
    $(".slide-header2").click(function(){
        $(".down-arrow").toggleClass("active");
        $(".slide-toggle").slideToggle(500);
    });

    // Animate
    $(".animate-btn").click(function(){
        $(".animate-img").animate({
            width: '700px',
        }, 500);
    });
    
    // Animation +=, -=
    $(".animate-plus-btn").click(function(){
        $(".animate-plus-minus").animate({
            width: '+=150px',
        }, 500);
    });

    $(".animate-minus-btn").click(function(){
        $(".animate-plus-minus").animate({
            width: '-=150px',
        }, 500);
    });

    // Animation
    $(".animatation-btn").click(function(){
        var img = $(".animation-img");

        img.animate({width: '700px', opacity: '0.4'}, "slow");
        img.animate({margin: '100px 0 0'}, "slow");
        img.animate({width: '500px', opacity: '1'}, "slow");
        img.animate({margin: '0 31%'}, "slow");
    });

    // Chaining
    $(".chaining-btn").click(function(){
        $(".chaining-text").fadeOut(1000).fadeIn(1000);
    });
    
    // Show Text Button
    $(".show-t-btn").click(function(){
        $(".show-text").text("This is some bold text in a paragraph.")
    })

    // Show HTML
    $(".show-h-btn").click(function(){
        $(".show-html").html("<b>bold</b><br><p>paragraph tag</p>")
    })

    // Show Value
    $(".value-btn").click(function(){
        alert("Value: " + $("#Name").val());
    });

    // Show Attribute value
    $(".attr-btn").click(function(){
        alert($("#link").attr("href"));
    });

    // Callback Function
    //for text
    $(".callb-btn-1").click(function(){ 
        $(".callb-1").text(function(i, origText){
            return "Old Text: " + origText + " New text: Hello SSB";
        });
    });

    // For HTML
    $(".callb-btn-2").click(function(){
        $(".callb-2").html(function(i, origText){
            return "Old HTML: " + origText + "New HTML: <p>Hello! <b>SSB</b></p>";
        });
    });

    // Change Attribute
    $(".change-attr-btn").click(function(){
        $(".change-attr").attr({
            "href" : "https://www.clean-services.sudiptamrong.com",
            "title" : "Sub Domain", 
        });
    });



});