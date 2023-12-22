class Student {
  // contructor using parameter properties shortcut
  constructor(private _firstName: string, private _lastName: string) {}

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

//* instead of this:
/*
  constructor(theFirst: string, theLast: string) {
    this._firstName = theFirst;
    this._lastName = theLast;
  }
*/
//* you can use this constructor shortcut:
// constructor(private _firstName: string, private _lastName: string) {}