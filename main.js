var HANG = HANG || {};

HANG.hangman = function(word){
	var alpha = 'abcdefghijklmnopqrstuvwxyz';
	var alpha = alpha.split('');

	//for loop to add a span to each item of the alpha array
	for(var i = 0; i < alpha.length; i++){
		$('#js-letter-picker').append('<span data-letter="'+ alpha[i] + '">' + alpha[i] + '</span>');
	}

	//sets up the word to guess
	var word = word;
	var word = word.split('')

	//iterate over each item in the word array
	for(var i = 0; i < word.length; i++){
		$('#js-word').append('<span data-letter="'+ word[i] + '"></span>');
	}

	$('#js-letter-picker span').on('click', function(){
		var selectedLetter = $(this).data('letter');


	});

}

$(document).on('ready', function(){
	HANG.hangman('jawn');

});//end of document ready



/*var HANG = HANG || {};

HANG.hangman = function(word){

	HANG.guesses = word.length + 5;
	$('#js-guesses').text('You have ' + HANG.guesses + ' guesses. Go.');

	var alpha = 'abcdefghijklmnopqrstuvwxyz';
	var alpha = alpha.split('');

	//for loop to iterate over each itemin our alpha array
	for(var i = 0; i < alpha.length; i++){
		//console.log(alpha[i]);
		$('#js-letter-picker').append('<span data-letter="' + alpha[i] + '">' + alpha[i] + '</span>')
	}

	console.log(word);

	var word = word.split('');

	//for loop to iterate over each item in our word
	for(var i = 0; i < word.length; i++){
		$('#js-word').append('<span data-letter="' + word[i] + '"></span>');
	}
	
	//add click event to js-word-picker span

	$('#js-letter-picker span').on('click', function(){
		var selectedLetter = $(this).data('letter');
		console.log(selectedLetter);


		$('#js-word span[data-letter="' + selectedLetter +'"]').text(selectedLetter);

		var count = $('#js-word span[data-letter="' + selectedLetter +'"]').length;
		console.log(count);

		if(count >= 1){
			$(this).addClass('has-letter');
		} else {
			$(this).addClass('has-not-letter');
			HANG.guesses = HANG.guesses - 1;
			//console.log(HANG.guesses);
			$('#js-guesses').text('You have ' + HANG.guesses + ' guesses left.')
		

		if(HANG.guesses === 0){
			alert("You've been hanged.")
			HANG.reset();
			return false; 
		}

	}
		
		//check for winner
		var winner = $('#js-word span:empty').length;
		if(winner === 0){
			alert('you have won!');
			HANG.reset()
		}


	});


};

HANG.guesses = 0;

HANG.reset = function(){
	HANG.guesses = 0;
	$('#js-word, #js-letter-picker').empty();
	$('#js-guesses').text('');
	HANG.hangman('hello');
};*/



/*$(document).on('ready', function(){
	HANG.hangman('hello');

	$('#js-hangman-word').on('submit', function(){
		var word = $('#js-hangman-word input').val();
		HANG.hangman(word);
		$('#js-hangman-word input').val('');
		return false;
	});

});*/