let customerTab = {
	'thomas-bechet' 		: 			{
		'firstname' 			: 			'Thomas',
		'lastname' 				: 			'Bécher',
		'phone-number' 		: 			'06.06.06.06.06',
		'email' 					: 			'thomas.bechet@gmail.com',
		'addressStart' 		: 			'4 avenue de la paix',
		'number-room' 			: 			'5',
		'addressEnd' 			: 			'5 avenue de la paix'	
	},
	'dorian-terbah' 		: 			{
		'firstname'			: 				'Dorian',
		'lastname'			: 				'Terbah',
		'phone-number' 	: 				'05.05.05.05.05',
		'email' 				: 				'dorian.terbah@gmail.com',
		'addressStart'		: 				'6 avenue de la paix',
		'number-room' 		: 				'3',
		'addressEnd'		: 				'7 avenue de la paix'
	},
	'nathan-bertholier' 	: 			{
		'firstname'			: 				'Nathan',
		'lastname'			: 				'Bertholier',
		'phone-number' 	: 				'04.04.04.04.04',
		'email' 				: 				'nathan.bertholier@gmail.com',
		'addressStart'		: 				'9 avenue de la paix',
		'number-room' 		: 				'3',
		'addressEnd'		: 				'10 avenue de la paix'
	},
	'jean-dupont'  		: 			{
		'firstname'			: 				'Jean',
		'lastname'			: 				'Dupont',
		'phone-number' 	: 				'06.06.06.06.06',
		'email' 				: 				'jean.dupont@gmail.com',
		'addressStart'		: 				'3 rue de la Tour, Tourville',
		'number-room' 		: 				'3',
		'addressEnd'		: 				'4 rue de la Liberté, LibertyCity'
	},
	'patrick-cegielski' 	: 			{
		'firstname'			: 				'Patrick',
		'lastname'			: 				'Cegielski',
		'phone-number' 	: 				'02.02.02.02.02',
		'email' 				: 				'patrick.cegielski@gmail.com',
		'addressStart'		: 				'13 avenue de la paix',
		'number-room' 		: 				'3',
		'addressEnd'		: 				'14 avenue de la paix'
	},
	'nathalie-gillet'		: 			{
		'firstname'			: 				'Nathalie',
		'lastname'			: 				'Gillet',
		'phone-number' 	: 				'01.01.01.01.01',
		'email' 				: 				'nathalie.gillet@gmail.com',
		'addressStart'		: 				'15 avenue de la paix',
		'number-room' 		: 				'3',
		'addressEnd'		: 				'16 avenue de la paix'
	},
	'denis-monnerat' 		: 			{
		'firstname'			: 				'Denis',
		'lastname'			: 				'Monnerat',
		'phone-number' 	: 				'08.08.08.08.08',
		'email' 				: 				'denis.monnerat@gmail.com',
		'addressStart'		: 				'17 avenue de la paix',
		'number-room' 		: 				'3',
		'addressEnd'		: 				'18 avenue de la paix'
	}
};



$(document).ready(function(){
	/* change customer info when customer's choice is changed*/
	$('.w3-ul li').on('click', function(){
		var id = $(this).attr('id')
		$('.active-customer').removeClass('active-customer');
		$(this).addClass('active-customer');

		for(var key in customerTab[id]) {
			$('form input[name="' + key + '"').val(customerTab[id][key]);
		}
	});
});