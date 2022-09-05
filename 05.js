let languages = ["html", "css", "javascript", "python", "php"];

let result = languages.filter(function (x) {
  return x.length > 3;
});

console.log(result);
