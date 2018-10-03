/*add a room */
$(document).ready(function(){
	$('.button-add-room').on('click', function(){
		$('.container-room').append('<li style="border: solid 2px; border-radius: 10px; width: 50%; display: block; margin-right: auto; margin-left: auto;" class="w3-padding w3-margin-top"> Meuble IKEA <i style="float: right; cursor: pointer" class="w3-align-right fa fa-pencil"></i></li>');
	});
});