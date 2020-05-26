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
});





/* Responsive Tabs */
    
$(function () {
    $("#services-tabs").responsiveTabs({
       animation:'slide'
    });
});


/*-- Portfolio -- */
$(window).on('load', function () {
   
    // Initialize isotope //
    $("#isotope-container").isotope ({
    });
    
    //filter items on button click 
    $("#isotope-filters").on('click', 'button', function() {
       
        //get filter value
        var filtervalue = $(this).attr('data-filter');
       // filter porfolio
        $("#isotope-container").isotope ({
            filter: filtervalue
    });
        // active button 
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });

});
// Manefic Popup plugin
$(function () {

    $("#portfolio-wrapper").magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
        gallery: {
        enabled: true
    }
        
    
    });
    
    });
// Testimonial section
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,



    });
});

$(function () {
        
    $(".counter").counterUp({
                delay: 10,
                time: 2000
    });
    
    
    });



// Cilents


$(function () {
    $("#cilents-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,

    });
    });


