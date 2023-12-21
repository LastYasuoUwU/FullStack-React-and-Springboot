let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "YAE";
let lastName: string = "Miko";

//----------------------------------------------
//* let's break it
// found = 0;
// grade = "A";
// firstName = false;

//* the results :
/*
sample-types.ts:8:1 - error TS2322: Type 'number' is not assignable to type 'boolean'.

8 found = 0;
  ~~~~~

sample-types.ts:9:1 - error TS2322: Type 'string' is not assignable to type 'number'.

9 grade = "A";
  ~~~~~

sample-types.ts:10:1 - error TS2322: Type 'boolean' is not assignable to type 'string'.

10 firstName = false;
   ~~~~~~~~~
*/
//----------------------------------------------

console.log("Found the fox : ", found);
console.log("Fox's grade: " + grade);
//* use template Strings
console.log(`Fox says: Hi , I'm ${firstName} ${lastName}`);
