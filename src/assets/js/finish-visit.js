let INITIAL_PRICE = 496.4;
let prices = {
	'premium-service1' 		: 		10,
	'premium-service2'		: 		30,
	'premium-service3'		: 		30,
	'premium-service4' 		: 		90,
	'premium-service5'		: 		10,
	'premium-service6' 		: 		10,
	'eco-service1' 			: 		-70,
	'eco-service2'				: 		-50,
	'eco-service3'				: 		-20 
};

$(document).ready(function(){
	$('form input').on('click', function(){
		var classInput = $(this).prop('class');
		/* control the price */
		var actualPrice = $('.actualPrice').text();
		actualPrice = parseFloat(actualPrice.substr(0, (actualPrice.length - 1)));
		if($(this).prop('checked')) {
			actualPrice += prices[classInput];
		} else {
			actualPrice -= prices[classInput];
		}

		/* set the new price */
		$('.actualPrice').text('' + actualPrice + '€');
	});
});