$(document).ready(function(){
	$(".button-collapse").sideNav({
    draggable: true
  });

	$('.parallax').parallax();

	var altura = $('.Menu').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.Menu').addClass('MenuFixed');
		} else {
			$('.Menu').removeClass('MenuFixed');
		}

	});

});

$(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});
