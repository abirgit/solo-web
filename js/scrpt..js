/* Preloader */
$(window).on('load', function () { // make sURE WHOLe website is loaded//
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* Team */

$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        
        
        
    });
});
    