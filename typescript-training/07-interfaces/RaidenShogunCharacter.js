"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaidenShogunCharacter = void 0;
class RaidenShogunCharacter {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    getFullName() {
        return `Full name of the character: ${this._firstName} ${this._lastName}`;
    }
    getDescription() {
        return "Her Excellency, the Almighty, Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.";
    }
}
exports.RaidenShogunCharacter = RaidenShogunCharacter;
