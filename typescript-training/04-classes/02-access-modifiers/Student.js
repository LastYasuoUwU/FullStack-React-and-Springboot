var Student = /** @class */ (function () {
    // contructor
    function Student(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Student.prototype, "firstName", {
        // accessors
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var myStudent = new Student("SHINICHI", "KUDU");
console.log("Full name: " + myStudent.firstName + " " + myStudent.lastName);
//* in case of error it still generate the .js file
//* to prevent that, use the flag "--noEmitOnError"
//* the command will be: tsc --noEmitOnError <fileName.ts>
/*
Student.ts:14:39 - error TS2341: Property 'firstName' is private and only accessible within class 'Student'.

14 console.log("Full name: " + myStudent.firstName + " " + myStudent.lastName);
                                         ~~~~~~~~~

Student.ts:14:67 - error TS2341: Property 'lastName' is private and only accessible within class 'Student'.

14 console.log("Full name: " + myStudent.firstName + " " + myStudent.lastName);
                                                                     ~~~~~~~~


Found 2 errors in the same file, starting at: Student.ts:14
*/
//* it doesn't generate the .js file
