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

  $("#typed1").typed({
        strings: ["^1000 Hi! ^500I'm Anya... ^400 and I love "],
        typeSpeed: 90,
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


   $('body').delay(3000).queue(function(){
   	 $('#get-started-button').removeClass('animated adeInUp');
     $('#get-started-button').addClass('animated rotateIn').clearQueue();

    });
              	



        $("#typed2").typed({
              strings: ["making cool stuff.^100", "to code. <br> ^200 <br>IT IS NICE TO HAVE YOU HERE ^600 :)"],
              backDelay: 300,    
              typeSpeed: 90,
              backSpeed: 50,
              callback: function() {

              }
          });
      };


}); //function ready


