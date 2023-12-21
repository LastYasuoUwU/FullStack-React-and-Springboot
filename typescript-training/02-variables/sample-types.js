var found = true;
var grade = 88.6;
var firstName = "YAE";
var lastName = "Miko";
//----------------------------------------------
//* let's break it
found = 0;
grade = "A";
firstName = false;
//----------------------------------------------
console.log("Found the fox : ", found);
console.log("Fox's grade: " + grade);
console.log("Fox says: Hi , I'm ".concat(firstName, " ").concat(lastName));
