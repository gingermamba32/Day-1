/*function cap(word) {
	return word[0].toUpperCase() + word.slice(1);
}
	
	function introduce (a, b) {
		a = cap(a);
		b = cap(b);
		console.log(a + " met " + b + ". They had a good time.");
	}

introduce( "jim", "John"); */
		//cap sentence

function cap(sentence) {
	var cap_words = sentence.split(' ');
	var i = 0;
	cap_words.forEach(function(index) {
		cap_words[i] = index[0].toUpperCase() + index.slice(1);
		i++;
	});
	return cap_words.join(' ');
};

function introduce (a, b) {
		a = cap(a);
		b = cap(b);
		console.log(a + " met " + b + ". They had a good time.");
	}

introduce( "jim jill bob", "John");