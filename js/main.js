/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
   

  // var deck = new $.scrolldeck();

$(function() {

 $('#site-title').addClass('animated bounce');


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


 $('#get-started-button').addClass('animated fadeInUp');
  $("#typed1, #typed2").css('text-shadow', 'rgb(14, 2, 2) 10px 10px 7px');

  // $("#typed1").typed({
  //       strings: ["^1000 Hi! ^500I'm Anya... ^400 and I love "],
  //       typeSpeed: 90,
  //       backDelay: 500,
  //       cursorChar: "|",
  //       callback: function() {
  //       			noCursor();
  //             showThis();
  //           }
  
  //     });

  $("#typed1").typed({
        strings: ["^1000 Hey! Glad you came by. ^500I'm Anya^100. ^400<br /> I love building <span style='color:#8BC34A;'>functional</span> and <span style='color:#00BCD4;'>beautiful</span> apps. <br /> ^500Check out my work! "],
        typeSpeed: 80,
        backDelay: 500,
        cursorChar: "|",
        callback: function() {
              hideCursor();
              //showThis();
            }
  
      });
  
		 function hideCursor() {
			$('.typed-cursor').css({ display: 'none' });

		 }


     function showThis(){


        $("#typed2").typed({
              strings: ["enjoys the problem solving of a <span style='color:#8BC34A;'>back-end</span> development...^100", "loves the creative part of a <span style='color:#00BCD4;'>front-end</span> development"],
              backDelay: 500,    
              typeSpeed: 80,
              backSpeed: 20
          });
      };


}); //function ready


