"use strict";
class Student {
    // contructor
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    // accessors
    get firstName() {
        return this._firstName;
    }
    set firstName(v) {
        this._firstName = v;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myStudent = new Student("SHINICHI", "KUDU");
console.log("Full name: " + myStudent.firstName + " " + myStudent.lastName);
//* generate template of tsconfig by the cmd: tsc --init
