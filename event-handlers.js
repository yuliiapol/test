$(document).ready(function() {
	$(document).on('mouseenter', "img", function() {
  	$('img').fadeOut(1000);
  });
  $(document).on('mouseleave', "img", function() {
  	$('img').fadeIn(1000);
  });
});

$(document).ready(() => {
	$(document).on('click', "img", (e) => {
		/*
    let number = 3;
    while(number > 0) {
    	alert(number);
      //number = number - 1;
      --number;
    }
    */
    
    for(let i = 3; i > 0; --i)
    	alert(i);
  });
});