$(document).ready(function() {
	$(document).on('mouseenter', "img", function() {
  	$('img').fadeOut(1000);
  });
  $(document).on('mouseleave', "img", function() {
  	$('img').fadeIn(1000);
  });
});