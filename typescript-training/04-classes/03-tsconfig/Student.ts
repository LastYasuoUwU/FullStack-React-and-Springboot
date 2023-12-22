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

//* generate template of tsconfig by the cmd: tsc --init
//* and compile using only "tsc" command 

