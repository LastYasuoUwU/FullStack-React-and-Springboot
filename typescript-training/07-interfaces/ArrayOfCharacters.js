"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RaidenShogunCharacter_1 = require("./RaidenShogunCharacter");
const YaeMikoCharacter_1 = require("./YaeMikoCharacter");
let firstCharacter = new YaeMikoCharacter_1.YaeMikoCharacter("Yae", "Miko");
let secondCharacter = new RaidenShogunCharacter_1.RaidenShogunCharacter("EI", "Raiden");
// declate an array for characters ... initially empty
let arrayOfCharacters = [];
// add characters to the array
arrayOfCharacters.push(firstCharacter);
arrayOfCharacters.push(secondCharacter);
for (let tempCharacter of arrayOfCharacters) {
    console.log(tempCharacter.getFullName());
    console.log("Character description: " + tempCharacter.getDescription());
}
