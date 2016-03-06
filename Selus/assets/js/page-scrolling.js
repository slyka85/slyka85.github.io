$(function() {
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $('.main-navigation').height()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

// IF scrolling on MOBILE, do not take into count the height of navigation bar
var mql = window.matchMedia("screen and (max-width: 480px)");
if (mql.matches){ // if media query matches
 console.log("Window is 480 or smaller");
     $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}


});
