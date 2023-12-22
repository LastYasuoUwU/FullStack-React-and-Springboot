import { Character } from "./Characters";
import { RaidenShogunCharacter } from "./RaidenShogunCharacter";
import { YaeMikoCharacter } from "./YaeMikoCharacter";

let firstCharacter = new YaeMikoCharacter("Yae", "Miko");
let secondCharacter = new RaidenShogunCharacter("EI", "Raiden");

// declate an array for characters ... initially empty
let arrayOfCharacters: Character[] = [];

// add characters to the array
arrayOfCharacters.push(firstCharacter);
arrayOfCharacters.push(secondCharacter);

for (let tempCharacter of arrayOfCharacters) {
    console.log(tempCharacter.getFullName())
  console.log("Character description: "+tempCharacter.getDescription());
}
