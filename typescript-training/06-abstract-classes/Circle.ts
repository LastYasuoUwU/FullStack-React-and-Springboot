import { Shape } from "./Shape";

export class Circle extends Shape {
  constructor(theX: number, theY: number, private _radius: number) {
    super(theX, theY);
  }

  public get radius(): number {
    return this._radius;
  }
  public set radius(value: number) {
    this._radius = value;
  }

  getInfo(): string {
    return (
      super.getInfo() +
      `and from the circle class the value of _radius: ${this._radius}`
    );
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }
}
