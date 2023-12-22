class Student {
  private _firstName: string;
  private _lastName: string;

  // contructor
  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }

  // accessors
  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(v: string) {
    this._firstName = v;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}

let myStudent = new Student("SHINICHI", "KUDU");

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
