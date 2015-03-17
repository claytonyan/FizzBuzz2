$(document).ready(function(){


for (var i = 1; i < 101; i++) {
	if (i % 3 === 0) {
		$('.list').append("<li>fizz</li>");

	}
	else if (i % 5 === 0) {
		$('.list').append("<li>buzz</li>");

	}
	else {
		$('.list').append("<li>"+i+"</li>");

	}

};


});
