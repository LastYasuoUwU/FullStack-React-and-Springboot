"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YaeMikoCharacter = void 0;
class YaeMikoCharacter {
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
        return "Lady Guuji of the Grand Narukami Shrine. Also serves as the editor-in-chief of Yae Publishing House. Unimaginable intelligence and cunning are hidden under her beautiful appearance.";
    }
}
exports.YaeMikoCharacter = YaeMikoCharacter;
