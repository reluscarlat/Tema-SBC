$(document).click(function(e) {
	if (!$(e.target).is('navbar')) {
    	$('.collapse').collapse('hide');
    }
});

let cars_container = document.querySelector("#pricing .container");


