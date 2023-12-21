let ratings: number[] = [5, 5, 2, 4, 1];

let total: number = 0;
for (let i = 0; i < ratings.length; i++) {
  console.log("ratings: " + ratings[i]);
  total += ratings[i];
}

let average: number = total / ratings.length;
console.log("average of ratings is :" + average);
