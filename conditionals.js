 
var isTeacher = function(name) {
	if (name === "dan" || name === "andrew") {
		return true;
	}	else {
		return false;
	};
};

//this is the same thing

var andrewIsATeacher = isTeacher("Andrew")

console.log(isTeacher("dan"));

#one line

var isName = function(name) {
return (name === "dan" || name === "andrew");
};

console.log("dan")