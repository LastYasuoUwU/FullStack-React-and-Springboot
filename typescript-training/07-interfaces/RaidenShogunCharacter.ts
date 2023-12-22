import { Character } from "./Characters";

export class RaidenShogunCharacter implements Character {
  constructor(private _firstName: string, private _lastName: string) {}

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  getFullName(): string {
    return `Full name of the character: ${this._firstName} ${this._lastName}`;
  }

  getDescription(): string {
    return "Her Excellency, the Almighty, Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.";
  }
}
