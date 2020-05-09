/* Preloader */
$(window).on('load', function () { // make sURE WHOLe website is loaded//
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});