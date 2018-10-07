/*add a room */
let index = 0;
let onclick = 'window.location="review-of-furniture.html"'

$(document).ready(function() {
	//add a new li
	$('.button-add-room').on('click', function() {
		$('.container-room').append('<li contenteditable="true" id="li' + index + '" class="w3-padding w3-margin-top li-added"> <i  class="fa fa-pencil"></i></li>');
		index++;
		$('.container-room .li-added:last-child').focus(); //give the focus
		/* add the listeners at added li*/
		$('.container-room li').on('focusout', function() {
			var actualID = $(this).attr('id');
			$('#' + actualID).attr('contenteditable', 'false');
		});

		$('.container-room .li-added:last-child i').on('click', function() {
			$(location).attr('href', 'review-of-visit.html');	
		});

	});

	$('.container-room li i').on('click', function() {
		$(location).attr('href', 'review-of-visit.html');
	});
});