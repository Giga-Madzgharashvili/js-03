let words = ["Madrid", "Rome", "Milan", "Berlin"];

let newWords = words.filter(function (x) {
  return x.includes("m") || x.includes("M");
});

console.log(newWords);
