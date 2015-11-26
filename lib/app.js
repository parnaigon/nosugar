$(document).ready(function($) {

  var $transformer = $('.transformer'),
      $menuToggle  = $('.menu'),
      $closeIcon   = $('#close-icon');

  //Attach event handler when .menu-toggle is clicked
  $menuToggle.on('click', function() {
    event.preventDefault();
    $transformer.toggleClass('is-open');
  });

  $closeIcon.on('click', function(){
    event.preventDefault();
    $transformer.removeClass('is-open');
  });

});
