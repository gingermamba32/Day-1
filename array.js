var info = [
	me = {
		name:"Mike",
		height: "2 meters"
	},
	david = {
		name: "David",
		height: "3 meters"
	}
];

console.log(info[0]);
console.log(info[1]);

for (n = 0; n <= 1; n++){

console.log(info[n].name);
console.log(info[n].height);
};

info.forEach(function(thing){
  console.log(thing);
});

info.forEach(function(thing){
  console.log(thing.name);
  console.log(thing.height);
});

#test whether each person has a property
 
var test = function (object, thing) {
console.log("Testing if" + object.name + "has property" + thing + ".");
return object.hasOwnProperty(thing);
};

console.log(test(info[0], 'age'));
console.log(test(info[0], 'name'));










