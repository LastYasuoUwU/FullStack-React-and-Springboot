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
class Student {
  firstName: string;
  lastName: string;

  // contructor
  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

let myStudent = new Student("SHINICHI", "KUDU");

console.log("Full name: " + myStudent.firstName + " " + myStudent.lastName);
