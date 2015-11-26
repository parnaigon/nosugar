$(document).ready(function($) {

  var $transformer = $('.transformer'),
      $menuToggle  = $('.menu'),
      $closeIcon   = $('#close-icon'),
      $backToTop   = $('.back-to-top');

// /////////////////////////////////////////////////////////
// Attach event handler when .menu-toggle is clicked
// ////////////////////////////////////////////////////////
  $menuToggle.on('click', function() {
    event.preventDefault();
    $transformer.toggleClass('is-open');
  });

  $closeIcon.on('click', function(){
    event.preventDefault();
    $transformer.removeClass('is-open');
  });


// ////////////////////////////////////////////////////////
// Back to the top button
// ///////////////////////////////////////////////////////
  var amountScrolled = 300;

  $(window).scroll(function() {
    event.preventDefault();
  	if ( $(window).scrollTop() > amountScrolled ) {
  		$backToTop.fadeIn('slow');
  	} else {
  		$backToTop.fadeOut('slow');
  	}
  });

  $backToTop.on('click', function() {
    event.preventDefault();
    $('html, body').animate({
  		scrollTop: 0
  	}, 700);
  	return false;
  });


});
