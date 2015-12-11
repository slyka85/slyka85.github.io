/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


  $("#typed1").typed({
        strings: ["^1000 Hi! ^500I'm Anya... ^400 and I love "],
        typeSpeed: 120,
        backDelay: 500,
        cursorChar: "|",
        callback: function() {
        			noCursor();
              showThis();
            }
  
      });


  
  		function noCursor() {
$('.typed-cursor').css({ display: 'none' });

  		}


     function showThis(){

        $("#typed2").typed({
              strings: ["making cool stuff.^100", "to code. <br> ^200 <br>IT IS NICE TO HAVE YOU HERE ^600 :)"],
              backDelay: 300,    
              typeSpeed: 120,
              backSpeed: 50,
              
          });

      };

  // $("#typed2").typed({
  //       strings: ["It is nice to have you here :)"],
  //       typeSpeed: 100,
  //       backDelay: 500,
  //       loop: false,
  //       loopCount: false,
  //       showCursor: true,
  //       cursorChar: "|"
  
  //     });


}); //function ready