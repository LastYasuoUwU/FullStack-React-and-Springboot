import { Character } from "./Characters";

export class YaeMikoCharacter implements Character {
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
    return "Lady Guuji of the Grand Narukami Shrine. Also serves as the editor-in-chief of Yae Publishing House. Unimaginable intelligence and cunning are hidden under her beautiful appearance.";
  }
}
