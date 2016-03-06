$(function() {
    $('a.page-scroll').click(function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - $('.main-navigation').height()
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});