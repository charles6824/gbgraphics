// Preloader
$(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
  });

// Initialize wow
new WOW().init();

//STICKY NAVBAR
let navbar = $(".navbar")
$(window).scroll(function(){
    let oTop = $("#services").offset().top - $("#about").offset().top
    if($(window).scrollTop()> oTop){
        navbar.addClass("sticky")
    }else{
        navbar.removeClass("sticky")
    }
})