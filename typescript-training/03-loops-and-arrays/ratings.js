var ratings = [5, 5, 2, 4, 1];
var total = 0;
for (var i = 0; i < ratings.length; i++) {
    console.log("ratings: " + ratings[i]);
    total += ratings[i];
}
var average = total / ratings.length;
console.log("average of ratings is :" + average);
