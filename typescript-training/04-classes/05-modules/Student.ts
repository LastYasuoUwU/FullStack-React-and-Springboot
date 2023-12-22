export class Student {
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