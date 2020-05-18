/* Preloader */
$(window).on('load', function () { // make sURE WHOLe website is loaded//
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* Team */

$(function () {
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
/* Progress Bars */

$(function () {


    $("#progress-elements").waypoint(function () {


        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 800);


        })
        this.destroy();
    }, {
        offset: 'bottom-in-view'

    });









    /*$(function() {
        $(".progress-bar").each(function() {
            
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"
                            },1000);
            
            
        }); */







});