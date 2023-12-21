var animes = [
    "Black cat",
    "Detective Conan",
    "Chainsaw man",
    "Spy x Family",
];
// for (let i = 0; i < animes.length; i++) {
//   console.log("anime: " + animes[i]);
// }
// let's use the simplified for loop
for (var _i = 0, animes_1 = animes; _i < animes_1.length; _i++) {
    var anime = animes_1[_i];
    if (anime === "Detective Conan") {
        console.log("My favourite anime: " + anime);
    }
    else {
        console.log("anime: " + anime);
    }
}
