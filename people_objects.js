function cap(word) {
	return word[0].toUpperCase() + word.slice(1);
}
	
	function introduce (a, b) {
		a = cap(a)
		b = cap(b)
		console.log(a + " met " + b + ". They had a good time.")
	}

introduce( "jim", "John");

#cap sentence

function cap(sentence) {
	var cap_words = sentence.split(' ')
	cap_words.forEach(function(thing) {
		cap_words[i] = thing[0].toUpperCase + word.slice(1);
		i++
	});
}

function introduce (a, b) {
		a = cap(a)
		b = cap(b)
		console.log(a + " met " + b + ". They had a good time.")
	}

introduce( "jim", "John");