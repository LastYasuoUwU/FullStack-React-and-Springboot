//* without constructor:
// class Student {
//   firstName: string;
//   lastName: string;
// }
// let's create an instance
// let myStudent = new Student();
// myStudent.firstName = "SHINICHI";
// myStudent.lastName = "KUDU";
// console.log("Full name: " + myStudent.firstName + " " + myStudent.lastName);
// ---------------------------------------------------------------
//* with constructor
var Student = /** @class */ (function () {
    // contructor
    function Student(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Student;
}());
var myStudent = new Student("SHINICHI", "KUDU");
console.log("Full name: " + myStudent.firstName + " " + myStudent.lastName);
