$(document).ready(function(){
	/* for the removable furniture*/
	$('.removable-furniture').on('click', function(){
		if($(this).prop('checked')) {
			$('.counter-items').css({
				display 		: 		'flex'
			});
		} else {
			$('.counter-items').css({
				display 		: 		'none'
			});
		}
	});

	/* calculation of volume*/
	$('.calculation-input').on('focusout', function(){
		/* recovery of width, length and height*/
		var width = $('input[name="width"]').val();
		width = parseInt(width.substr(0, (width.length - 1)), 10);

		var length = $('input[name="lenght"]').val();
		length = parseInt(length.substr(0, (length.length - 1)), 10)

		var height = $('input[name="height"]').val();
		height = parseInt(height.substr(0, (height.length - 1)), 10);

		//change the volume value
		$('.result-calculation-input').val('' + (length * width * height) + 'm');
	});
});