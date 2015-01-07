/*var students = [
{name: "bill", email: "@google"},
{name:"bob", email: "@gmail"}
]

for (var i = 0; i < students.length; i++){
	console.log(student[i])
}

console.log("student " + student.name + " has an email of " + student.email)
*/

var myArray = [1, 2, 3];

myArray.forEach(function(element, index) {
	if (element === 1) {
		index[5] = 8;
	}
	console.log(element);
});

console.log(myArray);
console.log(myArray[5]);